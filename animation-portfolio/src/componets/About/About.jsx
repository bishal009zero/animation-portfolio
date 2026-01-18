import Card from "../Card/Card";
import "./About.css";
import mern from "../../assets/mern1.png";
import react from "../../assets/reactpic.png";
import js from "../../assets/js.png";

const About = () => {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>  
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span> : ZERO LAMA
              </li>
              <li>
                <span>AGE</span> : 29YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : NEPALI, JAPANESE, ENGLISH, HINDI
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : IT
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>GPA</span> : 7.2
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : NEPALI, JAPANESE, ENGLISH, HINDI
              </li>
            </ul>
          </div>
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
               WEB DEVELOPER
              </li>
              <li>
                REACT
              </li>
              <li>
                JAVA SCRIPT
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="WEB DEVELOPER" image={mern}/>
        <Card title="REACT" image={react}/>
        <Card title="JAVA SCRIPT" image={js}/>
      </div>

    </div>
  )
}

export default About
