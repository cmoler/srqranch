import React, {Component} from 'react';
import PropTypes from 'prop-types';

import shouldPureComponentUpdate from 'react-pure-render/function';

import {mapMarkerStyle} from './MapMarkerStyle.js';

export default class MapMarker extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div style={mapMarkerStyle}>
                {this.props.text}
            </div>
        );
    }
}