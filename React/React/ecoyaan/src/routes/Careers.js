import HeroStyles from "../components/HeroStyles.css";
import careers  from "../assests/careers.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Careers (){
    return(
        <>
        <Navbar/>
       <div className="hero">
    <img alt="HeroImg" src={careers} />
  
    
   </div>
   <Footer/>
        </>
    )
    }
export default Careers;