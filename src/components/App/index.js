// == Import
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Team from '../../pages/Team';
import CGU from '../../pages/CGU';
import Connexion from '../../pages/Connexion';
import Inscription from '../../pages/Inscription';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Policy from '../../pages/Policy';
import useScrollTop from '../../hooks/useScrollTop';
import Contact from '../../pages/Contact';
import MyAccount from '../../pages/MyAccount';
import './styles.css';
import Profile from '../../pages/Profile';

// == Composant
function App() {
  useScrollTop();
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<div>page 404</div>} />

        {/* Private */}
        {isLogged
        && (
        <Route path="/mon-compte" element={<MyAccount />} />
        )}
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
