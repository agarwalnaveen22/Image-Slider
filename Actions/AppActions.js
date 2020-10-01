import {Constant} from '../Utilities/Constant';
import {loadImagesApi} from '../Services/AppApi';

export const loadImages = () => {
  return {
    type: Constant.LOAD_IMAGES,
  };
};

export const loadImagesSuccess = (data) => {
  return {
    type: Constant.LOAD_IMAGES_SUCCESS,
    payload: data,
  };
};

export const loadImagesFailed = () => {
  return {
    type: Constant.LOAD_IMAGES_FAILED,
  };
};

export const loadImagesRequest = (data) => {
  return async (dispatch) => {
    dispatch(loadImages());
    let resp = await loadImagesApi(data);
    if (resp) {
      dispatch(loadImagesSuccess(resp));
    } else {
      dispatch(loadImagesFailed());
    }
  };
};
