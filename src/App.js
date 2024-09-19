import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/Aboutus';
import Help from './Components/Help';
import { Link, Outlet } from 'react-router-dom';
import ArrayTable from './Components/ArrayTable';
import Layout from './Layout';

function App(props) {
  return (
    <>
      <div className='col-2 d-flex justify-content-end w-100'>
        <Link className='btn btn-outline-primary flex-fill' to={'/Home'} >Home  </Link>
        <Link className='btn btn-outline-danger flex-fill' to={'/contact'} >Contact  </Link>
        <Link className='btn btn-outline-success flex-fill' to={'/about'} >About  </Link>
        <Link className='btn btn-outline-secondary flex-fill' to={'/help'} >Help</Link>
        <Link className='btn btn-outline-dark flex-fill' to={'/student'} >Student</Link>

        {/* <div>{props.name}</div> */}
      </div>
      <Outlet />
    </>
  )
}
export default App;
