import React,{ useState} from "react";
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import './navbar.css';
import logo from '../../assets/wheel.png';



const Menu = () =>(
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#products">Products</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#contactuS">Contact US</a></p>
    </>
)



const Navbar = () =>{
    
    const [show, setshow] = useState(false);
    return <div className="navbar">
        <div className="navbar-container">
        <div className="navbar-container-logo">
            <img src={logo} alt="logo image" />
            <p>CARS4All</p>
        </div>
        <div className="navabar-container-links">
        <div className="navbar-container-links-container">
            <Menu />
        </div>
        <div className="navbar-container-menu">
            {
                show?<img src={close} alt="menu icon" id="menu" onClick={() => setshow(false)} />
                :<img src={menu} alt="menu icon" id="menu" onClick={() => setshow(true)} /> 
            }
            {show &&(
                <div className="menu-mobile scale-in-top"><Menu/></div>
            )}
        </div>
    </div>
    </div>
</div>
}
export default  Navbar;