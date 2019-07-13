import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }        

    searchTextChange = () => {

    }
    
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo header-item">
                    <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2575223/910/607/m1/fpnw/wm0/1-.jpg?1492764997&s=f9de0cc2c3e059cf10723894a00acf87" alt="logo" width="80px" height="60px"/>
                </Link>
                <div className="title header-item">{ this.props.title }</div>
                <div className="search-box header-item">
                    <input type="text" placeholder="Search..." onChange={this.searchTextChange} value={this.state.search} />
                </div>
            </div>
        );
    }

    static propTypes = {
        title: PropTypes.string,
    }
}

export default withRouter(TopBar);
