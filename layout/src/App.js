import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';

function App() {
  return (
    <><div className="container py-5">
      
      <Routes>
       
       <Route path="/" element={<Dashboard/>}/>
       <Route path="*" element='404 Page not found'/>
       <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
      </Routes>
       
      </div>
    </>
  );
}

export default App;
