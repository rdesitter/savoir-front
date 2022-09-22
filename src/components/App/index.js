// == Import
import { Route, Routes } from 'react-router-dom';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <h1>Composant : App</h1>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<div>page 404</div>} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
