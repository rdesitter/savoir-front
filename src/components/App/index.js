// == Import
import { Route, Routes } from 'react-router-dom';
import AppHeader from '../AppHeader';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<div>page 404</div>} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
