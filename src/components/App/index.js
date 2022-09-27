// == Import
import { Route, Routes } from 'react-router-dom';
import Team from '../../pages/Team';
import CGU from '../../pages/CGU';
import Connexion from '../../pages/Connexion';
import Inscription from '../../pages/Inscription';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Home from '../../pages/Home';
import './styles.css';
import Policy from '../../pages/Policy';
import useScrollTop from '../../hooks/useScrollTop';
import Contact from '../../pages/Contact';
import Thumbnail from '../Thumbnail';

// == Composant
function App() {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Thumbnail />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>page 404</div>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
