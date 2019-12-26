import * as allActions from './actionTypes';
import { ImageList } from './imageList';

export function receivePosts(data) {
  return { type: allActions.RECEIVE_POSTS, payload: data };
}

export function fetchPosts() {
  return (dispatch) => {
    localStorage.setItem('imageList', JSON.stringify(ImageList));
    console.log("hi");
    // dispatch(receivePosts(ImageList))
    dispatch({
      type: allActions.RECEIVE_POSTS,
      payload: ImageList
    })
  };
}

export function toggleLike(id) {
  return (dispatch, getState) => {
    let imageList = JSON.parse(localStorage.getItem('imageList'));
    imageList.map((val, index, obj) => {
      if (val.id == id) {
        console.log(val.isLiked)
        val.isLiked = !val.isLiked
        if (val.isLiked) {
          val.likes++
        } else {
          val.likes--
        }
      }
    });

    localStorage.setItem('imageList', JSON.stringify(imageList));
    dispatch(receivePosts(imageList))
  }
}