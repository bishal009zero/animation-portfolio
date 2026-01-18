import "./Home.css";
import man from "../../assets/man.png";
import {typewrite, Typewriter} from "react-simple-typewriter"

const Home = () => {
  return (
    <div id="home">
        <div className="lefthome">
            <div className="homedetails">
                <div className="line1">I'M</div>
                <div className="line2">ZERO LAMA</div>
                <div className="line3"><Typewriter 
                words={["WEB", "SOFTWARE DEVLOPER", "EDIYOR"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                dl
                /></div>
                
                <button>HIRE ME</button>
            </div>
        </div>
        <div className="righthome">
            <img src={man} alt="" />
        </div>
    </div>
  )
}

export default Home
