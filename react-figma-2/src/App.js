import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import Nav from './component/Nav';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <div>
        <Nav logo='iMeet' />
        <div>
          <Routes>
            <Route path="*" element={<h1 className="text-center">404 Not Found</h1>}/>
            <Route path="/" Component={Home} />
            <Route path='/login' Component={Login}></Route>
            <Route path='/signup' Component={Signup}></Route>
            <Route path='/dashboard' Component={Dashboard}/>
          </Routes>
        </div>

        <div>
          <Footer logo='iMeet' />
        </div>
      </div>
    </>
  );
}

export default App;
