import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
    componentWillMount() {
        if(!localStorage.getItem('imageList')){
            this.props.stuffActions.fetchStuff();
        }else{
            this.props.stuffActions.receiveStuff(JSON.parse(localStorage.getItem('imageList')))
        }
    }

    toggleLike=(id)=>{
        this.props.stuffActions.toggleLike(id);
    }

    renderData(item) {
        return (
            <div key={item.id} className="card">
                <img src={item.Image} className="card-img-top" alt="insta" />
                <div className="row image-icons-sections">
                    <div className="col-md-2">
                        {item.isLiked && (<i className="fas fa-heart fa-2x" onClick={()=>this.toggleLike(item.id)}></i>)}
                        {!item.isLiked && (<i className="far fa-heart fa-2x" onClick={()=>this.toggleLike(item.id)}></i>)}
                    </div>
                    <div className="col-md-2">
                        <i className="far fa-comment fa-2x"></i>
                    </div>
                    <div className="col-md-2 offset-md-6">
                        <div className="dropdown dropleft">
                            <i className="fas fa-ellipsis-v fa-2x " id="dropdownMenuButton" data-toggle="dropdown"></i> 
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="image-likes"><small className="text-muted">{item.likes} likes</small></p>
                <p className="image-description">Get these books for 30 days free with Scribd! Click the link in my bio! timeinvestors</p>
                {/* <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div> */}
                <p className="image-timestamp"><small className="text-muted">{item.timestamp}</small></p>

            </div>
        )
    }

    render() {
        console.log(this.props)
        if (!this.props.stuff) {
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div className="jumbotron ">
                    <div className="container">
                        <div className="row">
                            <div className="card-columns">
                                {
                                    this.props.stuff.map((item, index) => {
                                        return (
                                            this.renderData(item)
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);