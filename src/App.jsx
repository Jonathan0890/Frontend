import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import HomePrincipal from './pages/HomePrincipal';
import Terminos from './pages/Terminos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePrincipal />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path='/terminos-condiciones' element={<Terminos />} />
    </Routes>
  );
}

export default App;