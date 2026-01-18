
import { useRef } from "react";
import "./Nav.css";
import {Link} from "react-scroll"

const Nav = () => {

  const menu = useRef();
  const mobile = useRef();

  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className="desktopmenu">
        <Link to="home" spy={true} smooth={true} duration={500} activeClass="active "><li>Home</li></Link>
        <Link to="about" spy={true} smooth={true} duration={500} activeClass="active"><li>About</li></Link>
        <Link to="projects" spy={true} smooth={true} duration={500} activeClass="active"><li>Project</li></Link>
        <Link to="contact" spy={true} smooth={true} duration={500} activeClass="active"><li>Contact</li></Link>
      </ul>

      <div onClick={() => {
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")

      }} className="hambuger" ref={menu}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <ul className="mobilemenu" ref={mobile}>
        <Link to="home" spy={true} smooth={true} duration={500} activeClass="active "><li>Home</li></Link>
        <Link to="about" spy={true} smooth={true} duration={500} activeClass="active"><li>About</li></Link>
        <Link to="projects" spy={true} smooth={true} duration={500} activeClass="active"><li>Project</li></Link>
        <Link to="contact" spy={true} smooth={true} duration={500} activeClass="active"><li>Contact</li></Link>
      </ul>
      
    </nav>
  )
}

export default Nav
