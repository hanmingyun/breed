import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchBreeds from './../../service/httpClient';
import Breed from './../../component/breed';
import { getBreedsError, getSubBreeds, getBreedsPending, getSubBreedsById } from './../../reducers/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sub-category.css';



class SubCategory extends Component {
    
    componentDidMount = () => {
        if(!this.props.sub_breeds || this.props.sub_breeds.length < 0) {
            this.props.history.goBack();
        }
    }
    createSubBreeds = () => {
        var gallery = [];
        for (let index = 0; index < this.props.sub_breeds.length; index++) {
            const element = this.props.sub_breeds[index];
            gallery.push(
                <Breed key={index} name={element.name} img={element.imagePath}></Breed>
            )
        }
        return gallery;
    }

    render() {
        return (
            <div className="sub container">
                {this.props.sub_breeds && this.props.sub_breeds.length > 0 &&
                    this.createSubBreeds()
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
)(SubCategory);