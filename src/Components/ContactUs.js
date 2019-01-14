import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import React, {Component} from "react";
import axios from "axios";

export class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "tempName",
            email: "tempEmail",
            subject: "tempSubject",
            message: "tempMessage"
        }
    }

    submitHandler = event => {
        axios.post("/api/contactUs", {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        });
    };

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return(
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form
                                onSubmit={this.submitHandler}
                            >
                                <p className="h4 text-center py-4">Contact Us</p>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="contact-info">
                                            <MDBInput
                                                label="Your name"
                                                name="name"
                                                onChange={this.changeHandler}
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                            />
                                            <MDBInput
                                                label="Your email"
                                                name="email"
                                                onChange={this.changeHandler}
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                            />
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="7">
                                        <div className="contact-message">
                                            <MDBInput
                                                label="Subject"
                                                name="subject"
                                                onChange={this.changeHandler}
                                                icon="tag"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                required
                                            />
                                            <MDBInput
                                                type="textarea"
                                                name="message"
                                                onChange={this.changeHandler}
                                                rows="2"
                                                label="Your message"
                                                icon="pencil"
                                                required
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="text-center">
                                    <MDBBtn outline color="secondary" type="submit">
                                        Send <MDBIcon icon="paper-plane-o" className="ml-1" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        );
    }
}