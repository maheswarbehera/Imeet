import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
// import Testimonial from './Component/Testimonial';
// import Herosection from './Component/Herosection';
import {  Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Home from './Component/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      
      <div className='container-fluid'>
        <div className='header-nav'>
          <Nav logo='{CodeBase}' />
        </div>
      </div>

      <div>
        <Routes>
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>}/>
        <Route path="/" Component={Home}/>
        <Route path="/profile" Component={Profile}/>
        <Route path='/login' Component={Login}/> 
        <Route path='/signup' Component={Signup}/>
        <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
      </div>

      <div className='footer'>
        <Footer logo='{CodeBase}' />
      </div>
    </>
  );
}

export default App;
