import AppReducer from '../../Reducers/AppReducer';
import {Constant} from '../../Utilities/Constant';
import imageData from '../ImageData.json';

describe('test app reducers', () => {
  it('initial state', () => {
    const expectResp = {
      images: [],
      loading: true,
    };
    const resp = AppReducer(undefined, {type: Constant.LOAD_IMAGES});
    expect(resp).toEqual(expectResp);
  });

  it('load images success', () => {
    const expectResp = {
      images: imageData,
      loading: false,
    };
    const resp = AppReducer(undefined, {
      type: Constant.LOAD_IMAGES_SUCCESS,
      payload: imageData,
    });
    expect(resp).toEqual(expectResp);
  });

  it('load images failed', () => {
    const expectResp = {
      images: [],
      loading: false,
    };
    const resp = AppReducer(undefined, {
      type: Constant.LOAD_IMAGES_FAILED,
    });
    expect(resp).toEqual(expectResp);
  });
});
