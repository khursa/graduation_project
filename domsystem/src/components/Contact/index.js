import React, { Component } from 'react';
import '../../smooth_scroll.js';
import './style.css'

class Contact extends Component {
  render() {
    return (
      <section className="contact  parallax-contact section" id='7'>
         <section className="main-section container contactblock" id="main">
        <div className="contact__blocks row">
 
        <div className="contact__blocks--form">
         <form
          id="user_message"
          className="form"
          name="user_message"
          action="#"
          method="get"
          autocomplete="on"
            >
          <fieldset className="form__fieldset">
             <input
              required
              type="text"
              name="username"
              placeholder="Ваше ім'я"
                />
             <input
             required
             type="email"
             name="email"
             placeholder="Ваш еmail"
              />
             <input
              required
              type="text"
              name="subject"
              placeholder="Ваш телефон"
                />
            <textarea
              placeholder="Ваше повідомлення"
              >
            </textarea>
            <br />
              <input
                type="submit"
                name="submit"
                value="НАДІСЛАТИ"
                />
          </fieldset>
         </form>
        </div>

        <div className="contact__blocks--address">
          <address className="address">
            <p id="form-info">
            36008, м.Полтава, вул.Автобазівська, 2/9 корпус 16
            </p>
          <div id="map"></div>
          </address>
        </div>

      </div>
    </section>
      </section>
    );
  }
}

export default Contact;