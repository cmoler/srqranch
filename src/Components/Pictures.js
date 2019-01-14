import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from "mdbreact";
import Gallery from "react-grid-gallery";
import React, {Component} from "react";

export class Pictures extends Component {

    constructor(props){
        super(props);
        this.state = {
            modal1:false,
            modal2: false,
            modal3: false
        };
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

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

        return(
            <div>
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
        );
    }
}