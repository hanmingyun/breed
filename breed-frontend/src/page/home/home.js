import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBreeds from './../../service/httpClient';
import { ACTIONTYPE } from './../../actions/app';
import { getBreedsError, getBreeds, getBreedsPending }  from './../../reducers/app';
import Breed from './../../component/breed';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const HOME_URL = "breeds/all";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.fetchBreeds(HOME_URL, ACTIONTYPE.FETCH_BREEDS_SUCCESS);
    }

    moveToDetail =(e) => {
        var id = e.target.getAttribute("data");
        this.props.history.push(`/detail/${id}`);
    }

    generateCategories = () => {
        var categories = [];
        
        for (var index = 0; index < this.props.breeds.length; index++) {
            var element = this.props.breeds[index];
            categories.push(
                <div className="row" key={index}>
                    <button className="breed-nav"  data={element.uid} onClick={this.moveToDetail}>
                        {element.name} 
                    </button>
                </div>
            )
        }
        return categories;
    }

    createGallery() {
        var gallery = [];
        for (let index = 0; index < this.props.breeds.length; index++) {
            const element = this.props.breeds[index];
            gallery.push(
                <Breed key={index} name={element.name} img={element.imagePath}></Breed>
            )
        }
        return gallery;
    }

    render() {
        return (
            <div className="home container">
               <div className="navigator col-md-2">
                    {this.props.breeds && typeof this.props.breeds !== 'undefined' &&
                        this.generateCategories()
                    }
                    
               </div>
                <div className="breeds col-md-10">
                    <div className="row">
                        {this.props.breeds && typeof this.props.breeds !== 'undefined' &&
                            this.createGallery()
                        }
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