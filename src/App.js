import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/Aboutus';
import { Link, Outlet } from 'react-router-dom';
import ArrayTable from './Components/ArrayTable';
import Layout from './Layout';

function App(props) {
  return (
    <>
      <div className='btn btn-outline-primary'><Link to={'/Home'} >Home  </Link></div>
      <div className='btn btn-outline-danger'><Link to={'/contact'} >Contact  </Link></div>
      <div className='btn btn-outline-success'><Link to={'/about'} >About  </Link></div>
      <div className='btn btn-outline-secondary'><Link to={'/student'} >Student</Link></div>
      {/* <div>{props.name}</div> */}
      <Outlet/>
    </>
  );
}
export default App;