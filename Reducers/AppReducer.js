import {Constant} from '../Utilities/Constant';

const INTIAL_STATE = {
  images: [],
  loading: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Constant.LOAD_IMAGES:
      return {...state, loading: true};
    case Constant.LOAD_IMAGES_SUCCESS:
      return {...state, loading: false, images: action.payload};
    case Constant.LOAD_IMAGES_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
