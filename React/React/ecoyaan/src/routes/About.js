import HeroStyles from "../components/HeroStyles.css";
import about  from "../assests/about.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
function About(){
    return(
        <>
        <Navbar/>
       <div className="hero">
    <img alt="HeroImg" src={about} />
    <div className="about-text">
    <h1>About Us</h1>
    </div>
    <AboutUs/>
     <Footer/>
   </div>
  
  
        </>
    )
    }
export default About;