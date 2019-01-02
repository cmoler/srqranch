import React, { Component, Fragment } from "react";
import { MDBBtn } from "mdbreact";
import "./LandingPage.css";

export class LandingPage extends Component {

    render() {

        return(
            <div>
                <div className="splash">
                    <div className="ranch-title">
                        <h1>SRQ Ranch</h1>
                    </div>
                    <div className="selection-buttons">
                        <Fragment>
                            <MDBBtn href="Hunting">Hunting and Fishing</MDBBtn >
                            <MDBBtn href="Vacation">Vacation Rentals</MDBBtn >
                        </Fragment>
                    </div>
                </div>
            </div>
        );
    }
}