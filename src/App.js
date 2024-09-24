import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/Aboutus';
import Help from './Components/Help';
import { Link, Outlet } from 'react-router-dom';
import ArrayTable from './Components/ArrayTable';
import Layout from './Layout';
import Lab from './Components/US';

function App(props) {
  return (
    <>
      <div className='col-2 d-flex justify-content-end w-100'>
        <Link className='btn btn-outline-primary flex-fill' to={'/Home'} element={<Home/>}> Home  </Link>
        <Link className='btn btn-outline-danger flex-fill' to={'/contact'} element={<Contact/>}> Contact  </Link>
        <Link className='btn btn-outline-success flex-fill' to={'/about'} element={<About/>}> About  </Link>
        <Link className='btn btn-outline-secondary flex-fill' to={'/help'} element={<Help/>}> Help</Link>
        <Link className='btn btn-outline-dark flex-fill' to={'/student'} element={<ArrayTable/>}> Student</Link>
        <Link className='btn btn-outline-primary flex-fill' to={'/useState'} element={<Lab/>} > useState </Link>
        {/* <div>{props.name}</div> */}
      </div>
      <Outlet />
    </>
  )
}
export default App;
