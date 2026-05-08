import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Normalize URL hash for HashRouter and lock the audience context BEFORE
// React renders. Without this, two bugs occur:
//   1. "/#peru" (no leading slash) does not match HashRouter's "/peru" route,
//      so the page can stick on whatever was previously rendered (e.g. /style).
//   2. Sub-pages (Style, FAQ) read sessionStorage at render time, but the flag
//      is only set in a Navbar useEffect — so a direct hit on /style after a
//      cold load misses the Peru flag and shows the English Act I content.
function normalizeAudienceFromUrl() {
  if (typeof window === 'undefined') return;
  const rawHash = window.location.hash || '';
  let hash = rawHash;
  // Insert missing slash: "#peru" -> "#/peru"
  if (hash.length > 1 && !hash.startsWith('#/')) {
    hash = '#/' + hash.substring(1);
  }
  const path = hash.substring(1).toLowerCase();
  if (path === '/pe' || path === '/peru') {
    sessionStorage.setItem('peruContext', '1');
    sessionStorage.removeItem('colombiaContext');
    hash = '#/peru';
  } else if (path === '/co' || path === '/colombia') {
    sessionStorage.setItem('colombiaContext', '1');
    sessionStorage.removeItem('peruContext');
    hash = '#/co';
  }
  if (hash !== rawHash) {
    history.replaceState(null, '', window.location.pathname + window.location.search + hash);
  }
}

normalizeAudienceFromUrl();
window.addEventListener('hashchange', normalizeAudienceFromUrl);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
