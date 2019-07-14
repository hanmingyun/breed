import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBreeds from './../../service/httpClient';
import { ACTIONTYPE } from './../../actions/app';
import { getBreedsError, getSubBreeds, getBreedsPending, getSubBreedsById } from './../../reducers/app';

import './detail.css';

const DETAIL_URL = "breed/findOne/";
const SUBBREED_URL = "breed/findBySub/";
const RANDOM_URL = "breed/random/";

class Detail extends Component {

    componentDidMount = (prevProps) => {
        var id = this.props.match.params.id;
        this.props.fetchBreeds(DETAIL_URL + id, ACTIONTYPE.FETCH_SUB_BREEDS_SUCCESS)
        this.props.fetchBreeds(SUBBREED_URL + id, ACTIONTYPE.FETCH_SUB_BREEDS_BY_ID)
        this.setState({
            id: id,
        });
    }

    showSubBreeds = () => {
        this.props.history.push(`/sub/${this.props.breed.uid}`);
    }

    randomSelect = () => {
        this.props.fetchBreeds(RANDOM_URL, ACTIONTYPE.FETCH_SUB_BREEDS_SUCCESS)
        this.props.fetchBreeds(SUBBREED_URL + this.props.breed.uid, ACTIONTYPE.FETCH_SUB_BREEDS_BY_ID)
    }

    render() {
        return (
            <div className="detail container">
                
                {this.props.breed  && typeof this.props.breed !== "undefined" &&
                <div>
                    <div className="btn-random-container">
                        <button onClick={this.randomSelect}>Random</button>
                    </div>
                    <div className="row text-center">
                        <img className="img-detail" src={this.props.breed.imagePath} alt=""/>
                        <div className="name-detail">
                            <span>{this.props.breed.name}</span>
                            {
                                this.props.sub_breeds && this.props.sub_breeds.length > 0 && 
                                <span className="btn-sub-breed" onClick={this.showSubBreeds}> Sub Breeds &nbsp;({this.props.sub_breeds.length})</span>
                            }
                            
                        </div>
                        
                    </div>
                </div>
                }
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
)(Detail);