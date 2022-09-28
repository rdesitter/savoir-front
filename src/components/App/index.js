// == Import
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Team from '../../pages/Team';
import About from '../../pages/About';
import CGU from '../../pages/CGU';
import Connexion from '../../pages/Connexion';
import Inscription from '../../pages/Inscription';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Home from '../../pages/Home';
import Policy from '../../pages/Policy';
import useScrollTop from '../../hooks/useScrollTop';
import Contact from '../../pages/Contact';
import MyAccount from '../../pages/MyAccount';
import Profile from '../../pages/Profile';
import AccessibilityMenu from '../AccessibilityMenu';
import './styles.scss';
import NotFound from '../../pages/404';
import Annonce from '../../pages/Annonce';

import AnnoncesCategorie from '../../pages/AnnoncesCategorie';
import SearchPage from '../../pages/Search';
import CreatePost from '../../pages/CreatePost';



// == Composant
function App() {
  useScrollTop();
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <div className="app">
      <AccessibilityMenu />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<AnnoncesCategorie />} />
        <Route path="/annonces/:id" element={<Annonce />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/CGU" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="/recherche" element={<SearchPage />} />
        <Route path="/annonces/ajouter" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />

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
