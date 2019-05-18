import React, {Component} from 'react'; 
import '../footer/footer.style.css'; 

/*Footer */
import footerImage from '../../../public/images/footer.png';
import vinetLogo from '../../../public/images/logo-2.png';

class Footer extends Component {
    render(){
        return(
        <section>
            <div className="footerImageContainer">
                <img className="footerImage" alt="footer" src={ footerImage }></img>
            </div>
            <div className="teamFooter">
                <div className="footerLogoContainer">
                    <img className="vinetLogo" alt="vinetLogo" src={ vinetLogo }></img>
                    <p className="year">2019</p>
                </div>
            </div>
        </section>

        );
    }
}
export default Footer;