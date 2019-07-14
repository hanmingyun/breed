import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBreeds from './../service/httpClient';
import { ACTIONTYPE } from './../actions/app';
import { getBreedsError, getSubBreeds, getBreedsPending, getSubBreedsById } from './../reducers/app';

const SEARCH = "breeds/search/";

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }        

    searchTextChange = (e) => {
        this.setState({search: e.target.value});
    }
    
    onKeyDown = (e) => {
        if(this.state.search !== "" && e.keyCode === 13) {
            this.props.fetchBreeds(SEARCH + this.state.search, ACTIONTYPE.FETCH_BREEDS_SUCCESS);
        }
    }
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo header-item">
                    <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2575223/910/607/m1/fpnw/wm0/1-.jpg?1492764997&s=f9de0cc2c3e059cf10723894a00acf87" alt="logo" width="80px" height="60px"/>
                </Link>
                <div className="title header-item"></div>
                <div className="search-box header-item">
                    <input type="text" placeholder="Search..." onChange={this.searchTextChange} onKeyDown={this.onKeyDown} value={this.state.search} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: getBreedsError(state),
    breed: getSubBreeds(state),
    pending: getBreedsPending(state),
    sub_breeds: getSubBreedsById(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBreeds: fetchBreeds
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);