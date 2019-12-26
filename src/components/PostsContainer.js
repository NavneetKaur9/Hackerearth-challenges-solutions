import { connect } from 'react-redux';
import { fetchPosts, receivePosts, toggleLike } from '../actions/postsActions';
import PropTypes from 'prop-types';
import React from 'react';

class PostsContainer extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('imageList')) {
            this.props.fetchPosts();
        }
        else {
            this.props.receivePosts(JSON.parse(localStorage.getItem('imageList')))
        }
    }

    toggleLike = (id) => {
        this.props.toggleLike(id);
    }

    renderData(item) {
        return (
            <div key={item.id} className="card">
                <img src={item.Image} className="card-img-top" alt="insta" />
                <div className="row image-icons-sections">
                    <div className="col-md-2">
                        {item.isLiked && (<i className="fas fa-heart fa-2x" onClick={() => this.toggleLike(item.id)}></i>)}
                        {!item.isLiked && (<i className="far fa-heart fa-2x" onClick={() => this.toggleLike(item.id)}></i>)}
                    </div>
                    <div className="col-md-2">
                        <i className="far fa-comment fa-2x"></i>
                    </div>
                    <div className="col-md-2 offset-md-6">
                        <div className="dropdown dropleft">
                            <i className="fas fa-ellipsis-v fa-2x " id="dropdownMenuButton" data-toggle="dropdown"></i>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span className="dropdown-item">Edit</span>
                                <span className="dropdown-item">Delete</span>
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
        if (!this.props.posts) {
            return (
                <div>
                    Loading Posts...
                </div>
            )
        } else {
            return (
                <div className="jumbotron ">
                    <div className="container">
                        <div className="row">
                            <div className="card-columns">
                                {
                                    this.props.posts.map((item, index) => {
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

PostsContainer.propTypes = {
    posts: PropTypes.array
};

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts());
        },
        receivePosts: (data) => {
            dispatch(receivePosts(data));
        },
        toggleLike: (id) => {
            dispatch(toggleLike(id));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsContainer);