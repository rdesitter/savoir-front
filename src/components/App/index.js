// == Import
import { Route, Routes } from 'react-router-dom';
import Team from '../../pages/Team';
import Connexion from '../../pages/Connexion';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="*" element={<div>page 404</div>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
