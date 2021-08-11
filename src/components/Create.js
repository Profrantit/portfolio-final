import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_213z9m3",
        "template_sc2qypt",
        e.target,
        "user_1mrNfJzRjxgz5quaY3FbL"
      )
      .then(
        result => {
          alert("Email sent, thank you!");
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className="content">
        <div className="container">
          <h1 className="brand">
            <span>Lorén</span> WD
          </h1>
          <div className="wrapper animate__animated animate__bounceInLeft">
            <div className="company-info">
              <h3>Lorén WD</h3>
              <ul className="unOrder">
                <li className="item">
                  <i className="fa fa-road"></i> Attundagränd 3
                </li>
                <li className="item">
                  <i className="fa fa-phone"></i> 070 5950 831
                </li>
                <li className="item">
                  <i className="fa fa-envelope"></i> axel.loren@gmail.com
                </li>
              </ul>
            </div>

            <div className="contact">
              <h3>Send me a message!</h3>
              <form onSubmit={sendEmail} id="contact-form">
                <p>
                  <label>Name</label>
                  <input
                    placeholder="name"
                    name="name"
                    type="text"
                    id="name"
                    required
                  ></input>
                </p>
                <p>
                  <label>Compay</label>
                  <input placeholder="company" type="text" />
                </p>
                <p>
                  <label>Email adress</label>
                  <input
                    placeholder="name"
                    name="name"
                    type="text"
                    id="email"
                    required
                  ></input>
                </p>
                <p>
                  <label>Phone</label>
                  <input
                    placeholder="phone number"
                    name="name"
                    type="text"
                    id="phone"
                  ></input>
                </p>{" "}
                <p className="full">
                  <label>message</label>
                  <textarea
                    placeholder="write ur message"
                    name="message"
                    rows="5"
                    id="message"
                    required
                  ></textarea>
                </p>
                <p className="full">
                  <button type="submit">submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
