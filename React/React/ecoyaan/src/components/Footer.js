import "./FooterStyles.css";

const Footer = () =>
{
    return(
        <div className="footer">
            <div className="top">
            <div>
                <h1>Ecoyaan</h1>
            </div>
            <div className="social">
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                <i className="fab fa-linkedin"></i>

                </a>
            </div>
            </div>
        <div className="bottom">
            <div>
                <h4>Company</h4>
                <a href="/">About Us</a>
                <a href="/">Sell on Ecoyaan</a>
                <a href="/">Careers</a>
            </div>
            <div>
                <h4>Links</h4>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of use</a>
                
            </div>
            <div>
                <h4>Registered Address:</h4>
                <a href="/">1-N-12T-781/1</a>
                <a href="/">Sri Krishna Vilasa,</a>
                <a href="/">Urvastores,</a>
                <a href="/">Ashoknagar(MR),</a>
                <a href="/">Dakshina Kannada- 575006,</a>
                <a href="/">Karnataka, India</a>
                
            </div>
            <div>
                <h4>Legal Business Name:</h4>
                <a href="/">Kindkarma E-Retail Private Limited</a>
                <a href="/">CIN: U47912KA2023PTC182592</a>
                <a href="/">Telephone: +91 9980490777</a>
                
            </div>

            <div>
                <h4>Subscribe to receive updates on blogs, future launches and more !</h4>
                <form>
                    <input className="subscript" placeholder="Your Email Address"/>
                    <p className="agree">By subscribing, you agree to receive notifications</p><span href="/" className="privacy-policy">Privacy Policy</span>
                    <br/>
                    <button type="submit" className="btn-green">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="brand">© 2023 - 2024, Ecoyaan <sup>TM</sup></div>
        </div>
    )
}
export default Footer