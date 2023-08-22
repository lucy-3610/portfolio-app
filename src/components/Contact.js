import React from 'react';
import Header from './Header';

import $ from "jquery";

import emailjs from '@emailjs/browser';
import { PatternFormat } from 'react-number-format';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            messageSubject: '',
            message: ''
        }
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Portfolio Contract Form', 'portfolio_template', '#contact-form', 'gj7UK3ZbUEd2l7NNx')
            .then((result) => {
                console.log(result.text);
                this.resetForm();
                $('#submit-message').html("Success!")
            }, (error) => {
                console.log(error.text);
            });
    };

    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            messageSubject: '',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h1>Contact</h1>
                            <p>
                                Email: <a className="color-secondary hover-signature" href="mailto:lucy.f.swett@gmail.com">lucy.f.swett@gmail.com</a>
                                <br></br>
                                Phone: <a className="color-secondary hover-signature" href="tel:904-382-4854">(904) 382-4854</a>
                            </p>
                        </div>
                        <section className="col-9 contact-wrap">
                            <form id="contact-form" onSubmit={this.sendEmail} className="contact-form">
                                <div className="row">
                                    <div className="col-sm-6 name">
                                        <div className="input-block">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" name="first-name" autoComplete="given-name" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 name">
                                        <div className="input-block">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" name="last-name" autoComplete="family-name" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-6">
                                        <div className="input-block">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                            <PatternFormat type="tel" name="phone-number" className="form-control" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)} format="(###) ###-####" mask="_" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-block">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                <div className="col-sm-12">
                                    <div className="input-block">
                                        <label htmlFor="messageSubject">Message Subject</label>
                                        <input type="text" name="subject" className="form-control" value={this.state.messageSubject} onChange={this.onMessageSubjectChange.bind(this)} />
                                    </div>
                                </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-12">
                                        <div className="input-block textarea">
                                            <label htmlFor="message">Drop your message here</label>
                                            <textarea rows="3" name="message" type="text" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-12">
                                        <input className="btn-theme btn-black" type="submit" name="submit" />
                                        <p id="submit-message"></p>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        );

    }
    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value })
    }
    onLastNameChange(event) {
        this.setState({ lastName: event.target.value })
    }
    onPhoneNumberChange(event) {
        this.setState({ phoneNumber: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageSubjectChange(event) {
        this.setState({ messageSubject: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

}

export default Contact;