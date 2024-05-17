import React,{useState} from 'react';
import './Navbar.css'
import rasm1 from '../../assets/img/log1.jpg'
import { Link,useLocation } from 'react-router-dom';
const Navbar = () => {

    const [fix,setFix] =useState(false);


    function setFixd(){
      if(window.scrollY >= 10){
        setFix(true)
      }
      else{
        setFix(false)
      }
    }
    window.addEventListener('scroll', setFixd)

    let {pathname} = useLocation()
    if(pathname.includes('/admin')){
        return <></>;   
    }
    return (
        <div className={ fix ? 'header fixed ' : 'navbar'}>

<div className="n-wrapper container">
       <div className="n-lift">
        <div className="n-name">
           <Link to={'/'}>
           <img src={rasm1} alt="" />
           </Link>
        </div>
       </div>
       <div className="n-rigth">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
            <Link to={'/'}>Home </Link>
            <Link to={'/user'}> User</Link>
          <a href="" className="">Service</a>
          <a href="" className="">Exsprese</a>
          <a href="" className="">Testimonials</a>
            </ul>
        </div>
        <button className="button">
            <Link to={'/admin'}>Admin</Link>
        </button>
       </div>
     </div>
            
        </div>
    );
}

export default Navbar;
