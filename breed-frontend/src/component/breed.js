import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Breed extends Component {
    render() {
        return (
            <div className="col-md-3">
                <img src={this.props.img} width="200px" height="240px" alt=""></img>
                <div className="breed-name">{this.props.name}</div>
            </div>
        );
    }

    static propTypes = {
        img: PropTypes.string,
        name: PropTypes.string
    }
}

export default Breed;
