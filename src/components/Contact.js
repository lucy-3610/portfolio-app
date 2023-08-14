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

    resetForm(){
        this.setState({firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        messageSubject: '',
        message: ''})
      }

    componentDidMount() {
        $('.contact-form').find('.form-control').each(function () {
            var targetItem = $(this).parent();
            if ($(this).val()) {
                $(targetItem).find('label').css({
                    'top': '10px',
                    'fontSize': '14px'
                });
            }
        })
        $('.contact-form').find('.form-control').focus(function () {
            $(this).parent('.input-block').addClass('focus');
            $(this).parent().find('label').animate({
                'top': '10px',
                'fontSize': '14px'
            }, 300);
        })
        $('.contact-form').find('.form-control').blur(function () {
            if ($(this).val().length === 0) {
                $(this).parent('.input-block').removeClass('focus');
                $(this).parent().find('label').animate({
                    'top': '25px',
                    'fontSize': '18px'
                }, 300);
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Contact</h1>
                <p>Email: <a href="mailto:lucy@lucyswett.com">lucy@lucyswett.com</a></p>
                <p>Phone: <a href="tel:904-382-4854">(904) 382-4854</a></p>
                <section className="contact-wrap">
                    <form action="email.php" onSubmit={this.handleSubmit.bind(this)} method="post" className="contact-form">
                        <div className="col-sm-6 name">
                            <div className="input-block">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-6 name">
                            <div className="input-block">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="tel" className="form-control" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <label htmlFor="messageSubject">Message Subject</label>
                                <input type="text" name="subject" className="form-control" value={this.state.messageSubject} onChange={this.onMessageSubjectChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block textarea">
                                <label htmlFor="message">Drop your message here</label>
                                <textarea rows="3" name="message" type="text" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <input type="submit" name="submit" />
                            {/* <button className="square-button">Send</button> */}
                        </div>
                    </form>
                </section>
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