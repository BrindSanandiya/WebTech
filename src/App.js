import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/Aboutus';
import { Link } from 'react-router-dom';

function App() {
  return (
   <>
   <Link to={'/Home'} element={<Home/>}>Home</Link><br/>
   <Link to={'/Contact'} element={<Contact/>}>Contact</Link><br/>
   <Link to={'/About'} element={<About/>}>About</Link><br/>
   </>
  );
}
export default App;