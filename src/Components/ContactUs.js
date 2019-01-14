import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import React, {Component} from "react";

export class ContactUs extends Component {

    render() {
        return(
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Contact Us</p>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="contact-info">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Confirm your email"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="7">
                                        <div className="contact-message">
                                            <MDBInput
                                                label="Subject"
                                                icon="tag"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                type="textarea"
                                                rows="2"
                                                label="Your message"
                                                icon="pencil"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <div className="text-center">
                                    <MDBBtn outline color="secondary">
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