import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';


const Contact = () => {
  const clearForm = () => {
    document.getElementById("contact-form").reset();
  }


  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6gpezox',
      'template_hsgc5x8', form.current, 'wTx9cDMqjvX7urlwT').then((result) => {
        console.log(result.text);
        clearForm();
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get To Know</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hafijul.dev@gmail.com</h5>
            <a href='mailto:hafijul.dev@gmail.com' target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Sheikh Hafijul Ali</h5>
            <a href='https://telegram.me/hafijuldev' target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Sheikh Hafijul Ali</h5>
            <a href='https://api.whatsapp.com/send?phone=917992390073&text=Hii%20How%20are%20you?' target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendMail} id="contact-form">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required> </textarea>
          <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
