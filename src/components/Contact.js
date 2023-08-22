import React from 'react';
import Header from './Header';

import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/scss/bootstrap";

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

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

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
                                Email: <a className="color-black hover-signature" href="mailto:lucy.f.swett@gmail.com">lucy.f.swett@gmail.com</a>
                                <br></br>
                                Phone: <a className="color-black hover-signature" href="tel:904-382-4854">(904) 382-4854</a>
                            </p>
                        </div>
                        <section className="col-9 contact-wrap">
                            <form action="email.php" onSubmit={this.handleSubmit.bind(this)} method="post" className="contact-form">
                                <div className="row">
                                    <div className="col-sm-6 name">
                                        <div className="input-block">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" autoComplete="given-name" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 name">
                                        <div className="input-block">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" autoComplete="family-name" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-sm-6">
                                        <div className="input-block">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                            <input type="tel" className="form-control" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-block">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
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
                                        {/* <button className="square-button">Send</button> */}
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