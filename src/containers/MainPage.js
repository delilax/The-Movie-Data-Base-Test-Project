import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/indexAC';
import Carousel from '../components/Carousel/Carousel';

class MainPage extends Component{


    componentDidMount() {

        this.props.onGetMovies();
    }      
    render(){

        console.log(this.props.popularMoviesState);
       

        return(
            <div>
            <div>Popular movies</div>
            <Carousel 
                state={this.props.popularMoviesState}
            />
            </div>
        )
    }
}

// mapStateToProps to get state from reducer
const mapStateToProps = state =>{
    return {
        popularMoviesState: state.reducerShow.popular
    };
};

// mapStateToProps to dispatch get Movies to get data from API
const mapDispatchToProps = dispatch => {
    return{
        onGetMovies: () => dispatch(actionCreator.getMovies())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);