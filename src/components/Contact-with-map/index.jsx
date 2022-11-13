import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import MaskedInput from 'react-text-mask'
import axios from 'axios';
import Link from "next/link";

import Split from '../Split';

const ContactWithMap = ({ theme = "dark" }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")

  function submitContactMessage() {
    const obj = { name, email, phone, message}
    if(Object.values(obj).includes("")){
      return;
    }

    fetch("https://0qm5cxjdm4.execute-api.us-east-1.amazonaws.com/dev/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name, email, message, phone
      })
    }).then((data) => {
      console.log("hi")
      resetForm()
    })
  }

  function resetForm() {
    setEmail("")
    setPhone("")
    setName("")
    setMessage("")

  }
  // const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding black-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Contact Us</h4>
                <span>* All fields required</span>
                <br></br>
                &nbsp;

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                    phone: ""
                  }}
                >
                  {({ touched }) => (
                    <Form id="contact-form">
                      <div className="messages"></div>
                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <MaskedInput
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            className="form-control"
                            placeholder="Phone"
                            guide={false}
                            value={phone}
                            id="my-input-id"
                            required="required"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                         
                          <Field
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                           
                          />
                          
                        </div>
                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            required="required"
                          />
                        </div>
                        <Link href="/">
                          <button type="button" onClick={submitContactMessage} className={`btn-curve ${theme === 'dark' ? 'btn-lit' : 'btn-color'} `}>
                            <span>Send Message</span>
                          </button>
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            {/* <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>crackedvisualz@gmail.com</h5>
                  <h5><a href="tel:2404758107">+</a></h5>
                  <h5>240-475-8107</h5>
                </div>
                
                <div className="social mt-50">
                  <a href="https://www.youtube.com/channel/UCTUsx4sMXnMnPyfoXXZVdew" target="_blank" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/crackedvisualz/" target="_blank" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactWithMap;
