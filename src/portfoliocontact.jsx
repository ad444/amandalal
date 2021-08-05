import React, { useState } from "react";

const Contact = ({ backgroundcolor, txtColor }) => {


  const [validationMessage, setvalidationMessage] = useState({
    name: "",
    number: "",
    email: ""
  })

  const [field, setfield] = useState({
    name: "",
    number: "",
    email: ""
  })

  const check = (e) => {

    const { name, value } = e.target;
    setfield((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const validate = (e) => {
    e.preventDefault();
    const patname = /[A-Z][a-z]+/;
    const patnum = /^[0-9]+/;
    const patemail = /^\w+[./_]?@\w+\.[a-z]{2,3}$/;

    if (field.name === "" || !field.name.match(patname)) {
      setvalidationMessage((prev) => {
        return {
          ...prev,
          name: "Enter Valid Name"
        }
      })
    } else if (field.number === "" || !field.number.match(patnum) || field.number.length !== 10) {
      setvalidationMessage((prev) => {
        return {
          ...prev,
          number: "Enter Valid Number"
        }
      })
    } else if (field.email === "" || !field.email.match(patemail)) {
      setvalidationMessage((prev) => {
        return {
          ...prev,
          email: "Enter Valid Email"
        }
      })
    }
    else {
      setfield({
        name:"",
        number:"",
        email:""
      })
      alert(`Your Data :- ${field.name}, ${field.number}, ${field.email} Currently Form Does Not Have Any Backend Support Thank You!`);
    }
  };

  const hideValidationMessage = () => {
    setvalidationMessage({
      name: "",
      number: "",
      email: ""
    })
  }

  return (
    <>
      <div id="contact" className="container-fluid" style={{ backgroundColor: backgroundcolor, color: txtColor, border: "1px solid", borderColor: backgroundcolor }}>
        <div id="contactcontent" className="row ">
          <div className="col-12 text-center">
            <div>
              <h2 className="heading">Contact</h2>
              <center><div className="headborder"></div></center>
            </div>
          </div>
          <div className="col-md-10 mt-4 mx-auto">
            <div className="row">
              <div className="col-md-12 col-xl-10 mx-auto">
                <form onSubmit={validate} method="post">
                  <div className="form-group mt-3">
                    <label forhtml="exampleInputName">Name </label>
                    <input type="text" name="name" value={field.name} onChange={check} onFocus={hideValidationMessage} className="form-control" id="contactInput" aria-describedby="emailHelp" />
                    <small>{validationMessage.name}</small>
                  </div>
                  <div className="form-group">
                    <label forhtml="exampleInputNumber">Number</label>
                    <input type="text" name="number" value={field.number} onChange={check} onFocus={hideValidationMessage} className="form-control" id="contactInput" aria-describedby="emailHelp" />
                    <small>{validationMessage.number}</small>
                  </div>
                  <div className="form-group">
                    <label forhtml="exampleInputEmail1">Email address</label>
                    <input type="text" name="email" value={field.email} onChange={check} onFocus={hideValidationMessage} className="form-control" id="contactInput" aria-describedby="emailHelp" />
                    <small>{validationMessage.email}</small>
                    <small id="emailHelp" className="form-text text-muted">I'll never share your details with anyone else.</small>
                  </div>
                  <center><button type="submit" id="infosubmitbtn" className="btn">Submit</button></center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;