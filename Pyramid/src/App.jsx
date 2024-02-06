import { Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Services from './components/pages/Services';
import Teams from './components/pages/Teams'
import About from './components/pages/About'
import Footer from './components/Footer/Footer';
function App(){
return(
  <>
   
    <Navbar/>
    <Routes> 
      <Route path="/Home"  element={<Home/>} />
      <Route path="/Project"  element={<Project />}/>
      <Route path="/Services"  element={<Services/>}/>
      <Route path="/Teams" element ={<Teams/>}/>
      <Route path="/About" element ={<About/>}/>
    </Routes>
  <Footer/>
 
  </> 
);
}
export default App;