import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Breed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-3">
                <img src={this.props.img}></img>
                <div>{this.props.name}</div>
            </div>
        );
    }

    static propTypes = {
        img: PropTypes.string,
        name: PropTypes.string
    }
}

export default Breed;
