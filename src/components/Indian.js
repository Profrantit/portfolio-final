/* import React, { useState } from "react";

export default function Indian() {
  const [name, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [comapany, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const content = { name, email, company, message, phone };
    console.log(content);
  };
  return (
    <div>
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
                  <i className="fa fa-road"></i> 44 random street
                </li>
                <li className="item">
                  <i className="fa fa-phone"></i> 333 44 333
                </li>
                <li className="item">
                  <i className="fa fa-envelope"></i> test@test.es
                </li>
              </ul>
            </div>

            <div className="contact">
              <h3>Send me a message!</h3>
              <form onSubmit={handleSubmit} id="contact-form">
                <p>
                  <label>Name</label>
                  <input
                    placeholder="name"
                    name="name"
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  ></input>
                </p>
                <p>
                  <label>Compay</label>
                  <input
                    placeholder="company"
                    type="text"
                    required
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  />
                </p>
                <p>
                  <label>Email adress</label>
                  <input
                    placeholder="email"
                    name="name"
                    type="text"
                    id="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  ></input>
                </p>
                <p>
                  <label>Phone</label>
                  <input
                    placeholder="phone number"
                    name="name"
                    type="text"
                    id="phone"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
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
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  ></textarea>
                </p>
                <p className="full">
                  <button type="submit">submit</button>
                  <input type="submit" value="Submit" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
