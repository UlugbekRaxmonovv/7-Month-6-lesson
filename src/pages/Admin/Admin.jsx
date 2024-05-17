import React,{useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import './Admin.css';
import { TbMenuDeep } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { SiProducthunt } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";

const Admin = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
     <div className="admin">
      
      <div className={ `saidbar ${sidebar ? 'show' : <></>}`}>
     <div className="panil">
     <RiAdminFill />
        <h1>Admin panel</h1>
      <div className="hom">
     <Link to={'/'}>   <FaAngleLeft /></Link>
        <Link to={'/'} style={{textDecoration:'none',fontSize:'20px',color:'white'}}>Home</Link>        
      </div>
        
     </div>
        <ul>
        <li>
        
          <div className="link">
          <Link to={'manage'}>Manage-Product </Link>
          </div>
          <div className="link">
          <Link to={'manage'}><SiProducthunt /></Link>
          </div>
        </li>
        <li>
          <div className="link">
          <Link to={'manage'}><FaUserCircle /></Link>
          </div>
          <div className="link">
          <Link to={'manage-user'}>Manage-user </Link>
          </div>
          </li>

          <li>
        <div className="link">
          <Link to={'manage'}><SiProducthunt /></Link>
          </div>
          <div className="link">
          <Link to={'create-user'}>Create-user </Link>
          </div>
        </li>
        <li>
          <div className="link">
          <Link to={'manage'}><FaUserCircle /></Link>
          </div>
          <div className="link">
          <Link to={'create-product'}>Create-product</Link>
          </div>
          </li>
        </ul>
      </div>
   <div className="admin_content">
   <button onClick={() => setSidebar(!sidebar)}><TbMenuDeep /></button>
    <Outlet />
   </div>
     </div>
    </div>
  );
}

export default Admin;
