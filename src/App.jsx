import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

/* Router links carrying a hash (e.g. "/#work") change the URL without moving
   the page, so scroll to the target once the destination has rendered. */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ block: 'start' });
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Nav />
    <ScrollToHash />

    <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </main>

    <Footer />
  </>
);

export default App;
