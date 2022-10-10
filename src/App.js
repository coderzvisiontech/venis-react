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
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
