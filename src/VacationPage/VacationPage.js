import React, { Component } from 'react';
import "./VacationPage.css";
import { MDBBtn, MDBBtnGroup, MDBContainer, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

import {NearbyVacation} from "../Components/NearbyVacation";
import {HouseInfo} from "../Components/HouseInfo";
import {Pictures} from "../Components/Pictures";
import GoogleMapReact from "google-map-react";
import MapMarker from "../utils/MapMarker";
import {ReserveNow} from "../Components/ReserveNow";
import {ContactUs} from "../Components/ContactUs";

export class VacationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.nearbyRef = React.createRef();
        this.houseInfoRef = React.createRef();
        this.mapRef = React.createRef();
        this.picturesRef = React.createRef();
        this.reserveNowRef = React.createRef();
        this.contactUsRef = React.createRef();

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState((state, props) => ({
            isOpen: !this.state.isOpen
        }));
    }


    scrollToNearbyRef = () => {
        window.scrollTo({
            top: this.nearbyRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToHouseInfoRef= () => {
        window.scrollTo({
            top: this.houseInfoRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToMapRef= () => {
        window.scrollTo({
            top: this.mapRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToPicturesRef= () => {
        window.scrollTo({
            top: this.picturesRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToReserveNowRef= () => {
        window.scrollTo({
            top: this.reserveNowRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    scrollToContactUsRef= () => {
        window.scrollTo({
            top: this.contactUsRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    static defaultProps = {
        center: {
            lat: 38.149336,
            lng: -107.295005
        },
        zoom: 9
    };

    render() {

        return (
            <div>
                <Navbar fixed = "top" scrolling={true} color="default-color" dark expand="md" style={{marginTop: "0px"}}>
                    <NavbarBrand>
                        <NavbarNav left>
                        <NavLink to="/">
                            <strong className="srq-ranch">SRQ Ranch</strong>
                        </NavLink>
                        </NavbarNav>
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggleCollapse}
                    />
                    <Collapse
                        id="navbarCollapse3"
                        isOpen={this.state.isOpen}
                        navbar
                    >
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to="#!" onClick={() => this.scrollToNearbyRef()}>Nearby</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!" onClick={() => this.scrollToHouseInfoRef()}>House Info</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!" onClick={() => this.scrollToMapRef()}>Map</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!" onClick={() => this.scrollToPicturesRef()}>Pictures</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="#!" onClick={() => this.scrollToReserveNowRef()}>Reserve Now</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav>
                                        <div className="contact-us">Contact Us</div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#!" onClick={() => this.scrollToContactUsRef()}>Email</DropdownItem>
                                        <DropdownItem href="#!">Phone</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            <MDBContainer>
            <div className="intro">
                <h1 className="title">SRQ Ranch Vacation Rentals</h1>
                <div className="mission-statement">
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
            <div className="contact-reserve-buttons">
                <MDBBtnGroup>
                    <MDBBtn>
                        Contact Us
                    </MDBBtn>
                    <MDBBtn>
                        Reserve Now
                    </MDBBtn>
                </MDBBtnGroup>
            </div>
            <div ref={this.nearbyRef} className="nearby">
                <NearbyVacation/>
            </div>
            <div ref={this.houseInfoRef} className="house-info">
                <HouseInfo/>
            </div>
            <div ref={this.mapRef} className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" /* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MapMarker lat = {38.149336} lng={-107.295005} text={'A'} /*House*//>
                </GoogleMapReact>
            </div>
            <div ref={this.picturesRef} className="pictures">
                <Pictures/>
            </div>
            <div ref={this.reserveNowRef} className="reserve-now">
                <ReserveNow/>
            </div>
            <div ref={this.contactUsRef} className="contact-us-email">
                <ContactUs/>
            </div>
            </MDBContainer>
            </div>
        )
    }
}