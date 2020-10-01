import * as AppActions from '../../Actions/AppActions';
import {Constant} from '../../Utilities/Constant';

describe('test app actions', () => {
  it('payload for loadImages', () => {
    const resp = AppActions.loadImages();
    expect(resp.type).toEqual(Constant.LOAD_IMAGES);
  });

  it('payload for loadImagesSuccess', () => {
    let data = {
      id: 1,
    };
    const resp = AppActions.loadImagesSuccess(data);
    expect(resp.payload).toEqual(data);
  });

  it('payload for loadImagesFailed', () => {
    const resp = AppActions.loadImagesFailed();
    expect(resp.type).toEqual(Constant.LOAD_IMAGES_FAILED);
  });
});
