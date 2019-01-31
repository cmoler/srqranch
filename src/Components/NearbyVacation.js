import React, { Component } from 'react';
import Gallery from "react-grid-gallery";
import IMG_1 from '../images/nearby/IMG_2729.JPG'
import IMG_2 from '../images/nearby/IMG_2736.JPG'
import IMG_3 from '../images/nearby/IMG_2782.JPG'
import IMG_4 from '../images/nearby/IMG_2822.JPG'
import IMG_5 from '../images/nearby/IMG_2828.JPG'
import IMG_6 from '../images/nearby/IMG_2841.JPG'
import IMG_7 from '../images/nearby/IMG_3416.JPG'

export class NearbyVacation extends Component {

    render() {
        const IMAGES =
            [{
                src: IMG_1,
                thumbnail: IMG_1,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: IMG_2,
                thumbnail: IMG_2,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: IMG_3,
                thumbnail: IMG_3,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: IMG_4,
                thumbnail: IMG_4,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: IMG_5,
                thumbnail: IMG_5,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
             {
                src: IMG_6,
                thumbnail: IMG_6,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: IMG_7,
                thumbnail: IMG_7,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                caption: "After Rain (Jeshu John - designerspics.com)"
            },


            ];

        return(
            <div>
                <div className="nearby-title">
                    <h1>Nearby</h1>
                </div>
                <Gallery images={IMAGES}/>
            </div>
        );
    }
}