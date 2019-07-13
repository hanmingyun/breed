import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBreeds from './../../service/httpClient';
import { getBreedsError, getBreeds, getBreedsPending } from './../../reducers/app';
import Breed from './../../component/breed';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const HOME_URL = "breeds/list/all";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.fetchBreeds(HOME_URL);
    }

    moveToDetail = () => {
        console.log(this.props.breeds)
    }

    render() {
        return (
            <div className="home container">
               <div className="navigator col-md-2">
                    {this.props.breeds.length != 0 &&
                        <div className="row">
                            <button className="breed-nav" onClick={this.moveToDetail}>
                                breed 1
                            </button>
                        </div>
                    }
                    
               </div>
                <div className="breeds col-md-10">
                    <div className="row">
                        <Breed name="breed 1" img="https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg"></Breed>
                        <Breed name="breed 1" img="https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg"></Breed>
                        <Breed name="breed 1" img="https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg"></Breed>
                        <Breed name="breed 1" img="https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg"></Breed>
                    </div>
               </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: getBreedsError(state),
    breeds: getBreeds(state),
    pending: getBreedsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBreeds: fetchBreeds
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);