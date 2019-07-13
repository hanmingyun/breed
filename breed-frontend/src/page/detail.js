import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div className="detail">
                Detail
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         onMobile: state.app.onMobile,
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     storeWeb3Intent: intent => dispatch(storeWeb3Intent(intent)),
//     storeProducts: products => dispatch(storeProducts(products)),
//     storeActiveProductPage: activePage => dispatch(storeActiveProductPage(activePage))
// })


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dashboard)
export default Detail;