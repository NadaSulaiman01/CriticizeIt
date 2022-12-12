import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
// import styles from '../Nav/Nav.module.css'
function Footer (){

return (

    <>
    <div className="footsec ">
        <div className='container'>
<div className='row'>
    <div className='col-lg-4 col-md-5 col-sm-10 col-xs-12 logo' ><Logo /></div>
    <div className='col-lg-4 col-md-6 col-sm-10 col-xs-12 '>
        <ul className='list'>
            <li><NavLink to="/home" className="listcolor">
              Home
            </NavLink></li>
            <li><NavLink to="/companies"  className="listcolor">
              Companies
            </NavLink></li>
            <li><NavLink to="/Salaries" className="listcolor">
              Salaries
            </NavLink></li>
            <li> <NavLink to="/add-company" className="listcolor">
              Add my Company
            </NavLink></li>
            </ul> 
    </div>
    <div className='col-lg-4 col-md-10 col-sm-10 col-xs-12 ' style={{paddingTop:"60px"}}>
        <p >copyrights@2022-2023,CritisizeIt</p> </div>

        </div>
  
    
  </div>
  </div>
   
    </>
);

}
export default Footer;