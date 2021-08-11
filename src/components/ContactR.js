import React, { Component } from "react";

export default class ContactR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <>
        {" "}
        <h1>Welcome</h1>
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
                <form onSubmit={this.handleSubmit} id="contact-form">
                  <p>
                    <label>Name</label>
                    <input
                      placeholder="name"
                      name="name"
                      type="text"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    ></input>
                  </p>
                  <p>
                    <label>Compay</label>
                    <input
                      placeholder="company"
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </p>
                  <p>
                    <label>Email adress</label>
                    <input
                      placeholder="name"
                      name="name"
                      type="text"
                      id="email"
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
      </>
    );
  }
}
