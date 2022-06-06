
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Login from './component/login/Login';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
