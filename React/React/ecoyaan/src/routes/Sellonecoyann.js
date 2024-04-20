import HeroStyles from "../components/HeroStyles.css";
import Sell  from "../assests/Sell.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Sellonecoyaan (){
    return(
        <>
        <Navbar/>
         <div className="hero">
    <img alt="HeroImg" src={Sell} />
     
   </div>
   <Footer/>
        </>
    )
    }
export default Sellonecoyaan;