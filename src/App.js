import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Mock from './Pages/Mock';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={<Dashboard />} />
          <Route path="/mock" element={<Mock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
