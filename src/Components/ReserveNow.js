import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import CalendarComponent from "./CalendarComponent";
import isSameDay from "../utils/isSameDay";
import React, {Component} from "react";
import moment from 'moment';
import axios from "axios";

const datesList = [
    moment(),
    moment().add(1, 'days'),
    moment().add(3, 'days'),
    moment().add(9, 'days'),
    moment().add(10, 'days'),
    moment().add(11, 'days'),
    moment().add(12, 'days'),
    moment().add(13, 'days'),
];

export class ReserveNow extends Component {

    sendReserveMessage = () => {

        axios.post("/api/reserveNow", {

        });
    };

    render() {
        return(
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Reserve Now</p>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="reserve-info">
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
                                        <div className="reserve-message">
                                            <CalendarComponent
                                                isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
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
                                    <MDBBtn outline color="secondary" onClick={this.sendReserveMessage()}>
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