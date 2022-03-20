import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../Footer';
import Navigation from '../Navigation';
import '../contactForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


function Contact() {
  const notify = () => {
    toast('Messege Sent', {  autoClose : 2000})
   
  }

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_6gdkxda', e.target, 'user_rvZRMCHinbi5C4KHMvgkO')
      .then((result) => {
        toast('Messege Sent', {  autoClose : 2000})
      }, (error) => {
        toast('Error in Form', {  autoClose : 2000})
      });
      e.target.reset();
  }

  

  return (
    <div>
      <Navigation />
          <div className="wrapper">
             <div className="left">
                <div className="contact_form_div">
          
                    <p classname="contact_label">Send Me A Message Via Email !</p>

                         <form className="mainForm" onSubmit={sendEmail} autoComplete="off" >
                            <p><input type='text' name='name' placeholder='Name' required /></p>
                            
                            <p><input type='email' name='email' placeholder='Email' required/></p>
                            
                            <p><input type="text"name="subject" placeholder='subject' required /></p>
                            
                            <p><textarea name='message' placeholder='Message' required/></p>
                            
                            <p><input  type='submit' value='Send-message' /></p>

                           
                          </form>
                  </div>
                </div> 
                <div className="right">
                    <p className="contact-info"><i class="far fa-envelope"></i>cgrae49006@aol.com</p>
                      <a href="https://www.facebook.com/Graeter-Woodworking-108281477605182"><p className="contact-info"><i class="fab fa-facebook-messenger"></i>Send me a message on Messenger</p></a>
                      <a href="https://www.instagram.com/graeter_woodworking/"><p className="contact-info"><i class="fab fa-instagram"></i>Send me a message on Instgram</p></a>
                      <a href="https://www.etsy.com/shop/GraeterWoodworking?ref=seller-platform-mcnav"><p className="contact-info"><i class="fab fa-etsy"></i>Take a look at my Etsy</p></a>
                      <a href="https://www.google.com/maps/@44.5247094,-73.1321289,13z"><p className="contact-info"><i class="fas fa-map-marker-alt"></i>Colchester, Vermont</p></a>
      
                  </div>
          </div>
        <Footer />
    </div>
  )
}

export default Contact
