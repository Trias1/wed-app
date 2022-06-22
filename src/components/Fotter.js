import React from 'react';
import '../commoncss/footer.css'
import {SiWhatsapp} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Contact = () => {
    return ( 
	<footer>
		<div className="container center-text">
		<div className="footer__copyright">
			<h4>&copy; By Dewi & Adi</h4>
			</div>
		<a href="#" className='footer__logo'>Powered by Digital Trias Zaen Mutaqin</a>
			<div className="footer__socials">
			<a href="https://api.whatsapp.com/send?phone=+6281311635074"><SiWhatsapp/></a>
			<a href="https://www.instagram.com/tzm_12/"><FiInstagram/></a>
			<a href="https://www.facebook.com/iaz.zaen/"><FaFacebookF/></a>
			</div>
		</div>
	</footer>
        );
    }
    
    export default Contact;