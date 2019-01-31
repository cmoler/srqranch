import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from "mdbreact";
import Gallery from "react-grid-gallery";
import React, {Component} from "react";
import HOUSE_IMG_1 from "../images/house/20180107_112320.jpg";
import HOUSE_IMG_2 from "../images/house/20180107_112343.jpg";
import HOUSE_IMG_3 from "../images/house/20180113_114751.jpg";
import HOUSE_IMG_4 from "../images/house/20180113_114810.jpg";
import HOUSE_IMG_5 from "../images/house/IMG_0840.JPG";
import HOUSE_IMG_6 from "../images/house/IMG_2379 (1).jpg";
import HOUSE_IMG_7 from "../images/house/IMG_2832.JPG";

import OUTDOORS_IMG_1 from "../images/outdoors/20171024_165451.jpg";
import OUTDOORS_IMG_2 from "../images/outdoors/IMG_0936.JPG";
import OUTDOORS_IMG_3 from "../images/outdoors/IMG_1052.JPG";
import OUTDOORS_IMG_4 from "../images/outdoors/IMG_1054.JPG";
import OUTDOORS_IMG_5 from "../images/outdoors/IMG_1058.JPG";
import OUTDOORS_IMG_6 from "../images/outdoors/IMG_1101.JPG";
import OUTDOORS_IMG_7 from "../images/outdoors/IMG_1349.JPG";
import OUTDOORS_IMG_8 from "../images/outdoors/IMG_2429.JPG";
import OUTDOORS_IMG_9 from "../images/outdoors/IMG_2448.JPG";
import OUTDOORS_IMG_10 from "../images/outdoors/IMG_2458.JPG";
import OUTDOORS_IMG_11 from "../images/outdoors/IMG_2461.JPG";
import OUTDOORS_IMG_12 from "../images/outdoors/IMG_2470.JPG";
import OUTDOORS_IMG_13 from "../images/outdoors/IMG_2474.JPG";
import OUTDOORS_IMG_14 from "../images/outdoors/IMG_2622.JPG";
import OUTDOORS_IMG_15 from "../images/outdoors/IMG_2626.JPG";
import OUTDOORS_IMG_16 from "../images/outdoors/IMG_2628.JPG";
import OUTDOORS_IMG_17 from "../images/outdoors/IMG_2638.JPG";
import OUTDOORS_IMG_18 from "../images/outdoors/IMG_2640.JPG";
import OUTDOORS_IMG_19 from "../images/outdoors/IMG_2647.JPG";
import OUTDOORS_IMG_20 from "../images/outdoors/IMG_2648.JPG";
import OUTDOORS_IMG_21 from "../images/outdoors/IMG_2667.JPG";
import OUTDOORS_IMG_22 from "../images/outdoors/IMG_2671.JPG";
import OUTDOORS_IMG_23 from "../images/outdoors/IMG_2701.JPG";
import OUTDOORS_IMG_24 from "../images/outdoors/IMG_3446.JPG";

import TOWN_IMG_1 from "../images/towns/lake city/IMG_2632.JPG";

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
        const HOUSE_IMAGES =
            [{
                src: HOUSE_IMG_1,
                thumbnail: HOUSE_IMG_1,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_2,
                thumbnail: HOUSE_IMG_2,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_3,
                thumbnail: HOUSE_IMG_3,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_4,
                thumbnail: HOUSE_IMG_4,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_5,
                thumbnail: HOUSE_IMG_5,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_6,
                thumbnail: HOUSE_IMG_6,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: HOUSE_IMG_7,
                thumbnail: HOUSE_IMG_7,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            }];

        const OUTDOORS_IMAGES =
            [{
                src: OUTDOORS_IMG_1,
                thumbnail: OUTDOORS_IMG_1,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_2,
                thumbnail: OUTDOORS_IMG_2,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_3,
                thumbnail: OUTDOORS_IMG_3,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_4,
                thumbnail: OUTDOORS_IMG_4,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_5,
                thumbnail: OUTDOORS_IMG_5,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_6,
                thumbnail: OUTDOORS_IMG_6,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_7,
                thumbnail: OUTDOORS_IMG_7,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_8,
                thumbnail: OUTDOORS_IMG_8,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_9,
                thumbnail: OUTDOORS_IMG_9,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_10,
                thumbnail: OUTDOORS_IMG_10,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_11,
                thumbnail: OUTDOORS_IMG_11,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_12,
                thumbnail: OUTDOORS_IMG_12,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_13,
                thumbnail: OUTDOORS_IMG_13,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_14,
                thumbnail: OUTDOORS_IMG_14,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_15,
                thumbnail: OUTDOORS_IMG_15,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_16,
                thumbnail: OUTDOORS_IMG_16,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_17,
                thumbnail: OUTDOORS_IMG_17,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_18,
                thumbnail: OUTDOORS_IMG_18,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_19,
                thumbnail: OUTDOORS_IMG_19,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_20,
                thumbnail: OUTDOORS_IMG_20,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_21,
                thumbnail: OUTDOORS_IMG_21,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_22,
                thumbnail: OUTDOORS_IMG_22,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_23,
                thumbnail: OUTDOORS_IMG_23,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: OUTDOORS_IMG_24,
                thumbnail: OUTDOORS_IMG_24,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            }];

        const TOWN_IMAGES =
            [{
                src: TOWN_IMG_1,
                thumbnail: TOWN_IMG_1,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            }];

        return(
            <div>
                <h1>Pictures</h1>
                <Container>
                    <Button color="primary" onClick={() => this.toggle(1)} >House</Button>
                    <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)} size="fluid" centered>
                        <ModalHeader toggle={() => this.toggle(1)}>House</ModalHeader>
                        <ModalBody>
                            <Gallery images={HOUSE_IMAGES}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => this.toggle(1)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    <Button color="primary" onClick={() => this.toggle(2)} >Outdoors</Button>
                    <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} size="fluid" centered>
                        <ModalHeader toggle={() => this.toggle(2)}>Outdoors</ModalHeader>
                        <ModalBody>
                            <Gallery images={OUTDOORS_IMAGES}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => this.toggle(2)}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    <Button color="primary" onClick={() => this.toggle(3)} >Towns</Button>
                    <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} size="fluid" centered>
                        <ModalHeader toggle={() => this.toggle(3)}>Towns</ModalHeader>
                        <ModalBody>
                            <Gallery images={TOWN_IMAGES}/>
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