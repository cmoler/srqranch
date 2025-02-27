import PropTypes from 'prop-types';

import {
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
    VERTICAL_SCROLLABLE,
} from '../constants';

export default PropTypes.oneOf([
    HORIZONTAL_ORIENTATION,
    VERTICAL_ORIENTATION,
    VERTICAL_SCROLLABLE,
]);