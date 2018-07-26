import React, { Component } from 'react';
import './style.css'

class Contact_info extends Component {
  render() {
    return (
      <section className="contact_info">
        <div className="contact__info--tel">
              <p className="tel">
                <a
                  className="tel_text"
                  href="tel:+380686696960"
                  title="Здійснити виклик"
                  >
                  +380686696960
                </a>
              </p>
              <p className="tel">
                <a
                  className="tel_text"
                  href="tel:0800216960"
                  title="Здійснити виклик"
                  >
                  0800216960
                </a>
              </p>
              <p className="tel">
                <a
                  className="tel_text"
                  href="tel:+380996696960"
                  title="Здійснити виклик"
                  >
                  +380996696960
                </a>
              </p>
        </div>
        <div className="contact__info--email">
              <p>
                <a
                  className="email_text"
                  href="mailto:i@domashni.pro"
                  title="Написати листа"
                  >
                  i@domashni.pro
                </a>
              </p>
        </div>
    </section>
    );
  }
}

export default Contact_info;