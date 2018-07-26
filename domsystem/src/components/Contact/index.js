import React, { Component } from 'react';
import Contact_info from './Contact_info';
import ContactMap from './ContactMap';
import '../../smooth_scroll.js';
import './style.css';

class Contact extends Component {

  render() {
    return (
      <section className="contact  parallax-contact section" id='7'>
      <Contact_info />
         <section className="main-section container contactblock" id="main">
          <div className="contact__blocks row">
            <div className="contact__blocks--form">
            <form
              action="https://formspree.io/i@domashni.pro"
              id="user_message"
              className="form"
              name="email"
              method="POST"
              autoComplete="on"
                >
              <fieldset className="form__fieldset">
                <input
                  className="contact_input_text"
                  required
                  type="text"
                  name="username"
                  // pattern="^[a-zA-Z][a-zA-Z-_\.]{1,20}$"
                  pattern="[а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+"
                  

                  placeholder="Ваше ім'я"
                  // onClick={this.changeInput.bind(this)}     
                    />
                <input
                id="email"
                required
                type="email"
                name="email"
                pattern="^\w[\w!#$%&'*+\-/=?^_`{|}~]+\.?[\w!#$%&'*+\-/=?^_`{|}~]+@\w{1,12}\.[A-z]{2,3}$"
                placeholder="Ваш еmail"
                //  onchange={this.testEmail.bind(this)}  
                  />
                <input
                  required
                  id="phone"
                  type="text"
                  name="tel"
                  pattern="^\+\d\d(\(\d{3}\)|\d{3})\d{3}(\-|\s)?\d{2}(\-|\s)?\d{2}$"
                  placeholder="Ваш телефон"
                  // onchange={this.testPhone.bind(this)}  
                    />
                <textarea
                  name="message"
                  placeholder="Ваше повідомлення"
                  >
                </textarea>
                <br />
                <a href="https://domashni.pro/" target="_blank">
                  <input
                    type="submit"
                    name="submit"
                    value="НАДІСЛАТИ"
                    />
                </a>
              </fieldset>
            </form>
            </div>

            <div className="contact__blocks--address">
              <address className="address">
                <p id="form-info">
                36008, м.Полтава, вул.Автобазівська, 2/9 корпус 16
                </p>
              <div id="map">
               <ContactMap />
              </div>
              </address>
            </div>

          </div>
        </section>
      </section>
    );
  }
}

export default Contact;
