import React, { Component } from 'react';
import "./VacationPage.css";
import { MDBBtn, MDBBtnGroup, MDBDropdown, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import Gallery from 'react-grid-gallery';
import { Slide } from 'react-slideshow-image';

export class VacationPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() {
        const IMAGES =
            [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
                {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                    caption: "Boats (Jeshu John - designerspics.com)"
                },

                {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
                }];

        const slideImages = [
            'images/slide_2.jpg',
            'images/slide_3.jpg',
            'images/slide_4.jpg'
        ];

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        };

        return (
            <div>
                <Navbar color="default-color" dark expand="md" style={{marginTop: "0px"}}>
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
                                <NavLink to="#!">Nearby</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!">House Info</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!">Map</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#!">Pictures</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="#!">Reserve Now</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav>
                                        <div className="contact-us">Contact Us</div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#!">Email</DropdownItem>
                                        <DropdownItem href="#!">Phone</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                <div className="Intro">
                    <h1>SRQ Ranch Vacation Rentals</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
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
                <div className="nearby">
                    <Gallery images={IMAGES}/>
                </div>
                <div className="house-info">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="map">

                </div>
                <div className="pictures">

                </div>
                <div className="reserve-now">

                </div>
                <div className="contact-us-email">

                </div>
            </div>
        )
    }
}