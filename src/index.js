/**
 * Created by rouven on 12.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ProgressIndicator = ({percent}) =>
    <div className={'progress progress--pageload' + (percent === 100 ? ' invisible' : '')}>
        <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: percent + '%'}}
        >
            <span className="sr-only">{percent}% Complete</span>
        </div>
    </div>;

ProgressIndicator.propTypes = {
    percent: PropTypes.number
};

const mapStateToProps = (state) => {
    const queries = Object.keys(state.queries);
    const count = queries.length;
    const sum = queries.reduce((acc, val) => {return acc + state.queries[val].percent}, 0);
    const percent = count > 0 ? (sum / count) : 0;

    return {
        percent
    }
};

export default connect(mapStateToProps)(ProgressIndicator);