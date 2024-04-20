import "./HeroStyles.css";
import first  from "../assests/first.jpg";
function Hero (){
return(
    <>
   <div className="hero">
    <img alt="HeroImg" src={first} />
     <div className="hero-text">
        <h1>Buy Less, Buy Better!</h1>
        <p>Authentic source of truth for your sustainability needs.</p>
        <a href="/" className="show">About Us</a>
     </div>
   </div>
    </>
)
}
export default Hero;