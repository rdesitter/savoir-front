// == Import
import { Route, Routes } from 'react-router-dom';
import Team from '../../pages/Team';
import CGU from '../../pages/CGU';
import Connexion from '../../pages/Connexion';
import Inscription from '../../pages/Inscription';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Home from '../Home';
import './styles.css';
import Policy from '../../pages/Policy';
import useScrollTop from '../../hooks/useScrollTop';

// == Composant
function App() {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<Policy />} />
        <Route path="*" element={<div>page 404</div>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
