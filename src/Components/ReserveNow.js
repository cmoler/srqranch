import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import CalendarComponent from "./CalendarComponent";
import isSameDay from "../utils/isSameDay";
import React, {Component} from "react";
import moment from 'moment';
import axios from "axios";
import {DayPickerRangeController} from "react-dates";

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

    constructor(props) {
        super(props);

        this.state = {
            name: "tempName",
            email: "tempEmail",
            message: "tempMessage",
            startDate: null,
            endDate: null,
            focusedInput: null
        }
    }

    submitHandler = () => {
        axios.post("/api/reserveNow", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            startDate: this.state.startDate,
            endDate: this.state.endDate
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
                                <p className="h4 text-center py-4">Reserve Now</p>
                                <MDBRow>
                                    <MDBCol>
                                        <div className="reserve-info">
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
                                        <div className="reserve-message">
                                            <CalendarComponent
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                                isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                            />
                                            <MDBInput
                                                type="textarea"
                                                name="message"
                                                onChange={this.changeHandler}
                                                rows="2"
                                                label="Your message"
                                                icon="pencil"
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