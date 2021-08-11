function Next() {
  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log("You clicked submit.");
    }
  }
  return (
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
            <form id="contact-form">
              <p>
                <label>Name</label>
                <input name="name" type="text" id="name"></input>
              </p>
              <p>
                <label>Compay</label>
                <input name="name" type="text" id="comapnt"></input>
              </p>
              <p>
                <label>Email adress</label>
                <input name="name" type="text" id="email"></input>
              </p>
              <p>
                <label>Phone</label>
                <input name="name" type="text" id="phone"></input>
              </p>{" "}
              <p className="full">
                <label>message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p className="full">
                <button type="submit">submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Next;
