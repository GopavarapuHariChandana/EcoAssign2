import Impact  from "../assests/Impact.png";
import about  from "../assests/about.png";
import OurStory4  from "../assests/OurStory4.png";
import "./DestinationStyles.css"
const Destination = () => {
    return (
        <>
        <div className="destination">
            <div class="first-des">
            <div class="des-text">
            <h2>Join our community in creating a more sustainable future for everyone</h2>
            <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p><br/>
            <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
            </div>
            <div className="image">
        <img alt="img" src={Impact}/>
            </div>
            
        </div>
        <div class="first-des-r">
            <div class="des-text">
            <h2>Carefully curated Eco-friendly products</h2>
            <p>We believe that every purchase you make can have a positive impact on the planet and the future.</p><br/>
            <p>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
            </div>
            <div className="image">
        <img alt="img" src={about}/>
            </div>
            
        </div>
        <div class="first-des">
            <div class="des-text">
            <h2>For businesses that care deeply about sustainability</h2>
            <p>Do you run a business that is committed to sustainability in every aspect of your work?</p><br/>
            <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p><br/>
            <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
            </div>
            <div className="image">
        <img alt="img" src={OurStory4}/>
            </div>
           
        </div>
        <br/>  <br/>
        <a href="/"class="btn-green">Contact Us</a>
        </div>
   
        </>
    );
};
export default Destination;