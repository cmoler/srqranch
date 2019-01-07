import React, { Component } from 'react';
import "./VacationPage.css";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBBtn, MDBBtnGroup, MDBDropdown, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
import Gallery from 'react-grid-gallery';
import { Slide } from 'react-slideshow-image';
import GoogleMapReact from 'google-map-react';

import CalendarComponent from "./CalendarComponent";

export class VacationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modal1:false,
            modal2: false,
            modal3: false
        }

        this.nearbyRef = React.createRef();
        this.houseInfoRef = React.createRef();
        this.mapRef = React.createRef();
        this.picuresRef = React.createRef();
        this.reserveNowRef = React.createRef();
        this.contactUsRef = React.createRef();

        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState((state, props) => ({
            isOpen: !this.state.isOpen
        }));
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    scrollToNearbyRef = () => {
        window.scrollTo({
            top: this.nearbyRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    scrollToHouseInfoRef= () => {
        window.scrollTo({
            top: this.houseInfoRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    scrollToMapRef= () => {
        window.scrollTo({
            top: this.mapRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    scrollToPicturesRef= () => {
        window.scrollTo({
            top: this.picuresRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    scrollToReserveNowRef= () => {
        window.scrollTo({
            top: this.reserveNowRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    scrollToContactUsRef= () => {
        window.scrollTo({
            top: this.contactUsRef.current.offsetTop,
            behavior: "smooth"
        })
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
            'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
            'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg'
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
                    <div className="nearby-title">
                        <h1>Nearby</h1>
                    </div>
                    <Gallery images={IMAGES}/>
                </div>
                <div ref={this.houseInfoRef} className="house-info">
                    <h1>House Info</h1>
                    <Slide {...properties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={slideImages[0]} />
                            </div>
                            <h2>First Slide</h2>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={slideImages[1]} />
                            </div>
                            <h2>Second Slide</h2>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={slideImages[2]} />
                            </div>
                            <h2>Third Slide</h2>
                        </div>
                    </Slide>
                </div>
                <div ref={this.mapRef} className="map">
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
                <div ref={this.picuresRef} className="pictures">
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
                <div ref={this.reserveNowRef} className="reserve-now">
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
                                                    <CalendarComponent>
                                                    </CalendarComponent>
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
                </div>
                <div ref={this.contactUsRef} className="contact-us-email">
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
                </div>
            </MDBContainer>
            </div>
        )
    }
}