import React, { Component } from 'react';
import "./VacationPage.css";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBBtn, MDBBtnGroup, MDBDropdown, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import Gallery from 'react-grid-gallery';
import { Slide } from 'react-slideshow-image';
import GoogleMapReact from 'google-map-react';

export class VacationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modal1:false,
            modal2: false,
            modal3: false
        }
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

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
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg'
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
                <div className="nearby">
                    <div className="nearby-title">
                        <h1>Nearby</h1>
                    </div>
                    <Gallery images={IMAGES}/>
                </div>
                <div className="house-info">
                    <h1>House Info</h1>
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
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" /* YOUR KEY HERE */ }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {/*                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />*/}
                        </GoogleMapReact>
                </div>
                <div className="pictures">
                    <h1>Pictures</h1>
                    <Container>
                        <Button color="primary" onClick={() => this.toggle(1)} >House</Button>
                        <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)} centered>
                            <ModalHeader toggle={() => this.toggle(1)}>House</ModalHeader>
                            <ModalBody>
                                <Gallery images={IMAGES}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={() => this.toggle(1)}>Close</Button>
                            </ModalFooter>
                        </Modal>
                        <Button color="primary" onClick={() => this.toggle(2)} >Outdoors</Button>
                        <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} centered>
                            <ModalHeader toggle={() => this.toggle(2)}>Outdoors</ModalHeader>
                            <ModalBody>
                                <Gallery images={IMAGES}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={() => this.toggle(2)}>Close</Button>
                            </ModalFooter>
                        </Modal>
                        <Button color="primary" onClick={() => this.toggle(3)} >Towns</Button>
                        <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} centered>
                            <ModalHeader toggle={() => this.toggle(3)}>Towns</ModalHeader>
                            <ModalBody>
                                <Gallery images={IMAGES}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={() => this.toggle(3)}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Container>
                </div>
                <div className="reserve-now">

                </div>
                <div className="contact-us-email">

                </div>
            </div>
        )
    }
}