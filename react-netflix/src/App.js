import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Navbar from './component/Navbar'
import Landing from './component/Landing' 
import Category from './component/Category';
import Footer from './component/Footer';
import Faq from './component/Faq';

function App() {
  return (
    <>
      <Navbar/>
      <Landing/> 
      <Category/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
