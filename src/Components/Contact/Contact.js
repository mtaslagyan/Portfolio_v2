import React, { Component } from 'react'
import { Transition } from 'react-transition-group'


class Contact extends Component {
    state = {
        name: null,
        email: null,
        phone: null,
        message: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "message", ...this.state })
        })
            .then(() => alert("Thank you for your submission!"))
            .catch(error => alert(error));

        e.target.reset();
        e.preventDefault();
    }
    render() {
        return (
            <Transition timeout={2000} in={true} appear>
                {(status) => (
                    <div className={`contact contact-${status} text-center`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="contact-title">Contact</h1>
                                    <hr className="title-divider" />
                                    <div className="contact-welcome">Please feel free to call, email, or leave a message.</div>
                                </div>
                            </div>
                            <div className="row contact-phoneemail">
                                <div className="col-12">
                                    <div>(323) 821-9808 <br /> mtaslagyan@yahoo.com</div>
                                </div>
                            </div>
                            <div className="row contact-content">
                                <div className="col-12">
                                    <div>
                                        <form onSubmit={this.handleSubmit} name="message" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <input name="bot-field" type="hidden" />
                                                    <div className="form-fields mb-3">
                                                        <input className="mb-3" placeholder="Name*" required onChange={this.handleChange} type="text" name="name" />
                                                        <br />

                                                        <input className="mb-3" placeholder="Email*" required onChange={this.handleChange} type="email" name="email" />

                                                        <br />

                                                        <input className="" placeholder="Phone" onChange={this.handleChange} type="tel" name="phone" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-fields">

                                                        <textarea className="message" placeholder="Message*" required onChange={this.handleChange} type="text" name="message" maxlength="300"></textarea>
                                                        {/* <input className="" placeholder="Message*" required onChange={this.handleChange} type="text" name="message" maxlength="300" /> */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="required text-center">* Required</div> */}
                                            
                                            <div className="text-center">
                                                <button type="submit" className="submitBtn">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

export default Contact
