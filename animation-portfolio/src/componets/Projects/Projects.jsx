import "./projects.css";
import Card from '../Card/Card';
import va from "../../assets/va1.png"
import aifw from "../../assets/aiman.png"
import ait from "../../assets/aitext.png"
import aibg from "../../assets/bg.png"
import ai from "../../assets/va.png"


const Projects = () => {
  return (
   <div id="projects">
    <h1 id="para">1 MONTH EXPERIENCED IN PROJECTS</h1>
    <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={aifw}/>
        <Card title="AI POWER FITNESS WEBSITE" image={va} />
        <Card title="AI CHAT" image={ait} />
        <Card title="AI TEXT TO IMAGE" image={ai}/>
        <Card title="AI BACKGGROUND REMOVE" image={aibg}/>
    </div>
   </div>
  )
}

export default Projects
