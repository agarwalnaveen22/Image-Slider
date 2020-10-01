import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Slider from '../../Screens/Slider';
import imageData from '../ImageData.json';

const mockStore = configureMockStore();
const store = mockStore({});

describe('test slider page design and functionality', () => {
  var snap;
  const appData = {
    loading: false,
    images: imageData,
  };
  beforeEach(async () => {
    snap = await renderer.create(
      <Provider store={store}>
        <Slider appData={appData} />
      </Provider>,
    );
  });
  it('match snapshot', () => {
    expect(snap.toJSON()).toMatchSnapshot();
  });

  it('check methods onRefresh', async () => {
    await snap.toTree().rendered.rendered.instance.onRefresh();
    let images = snap.toTree().rendered.rendered.instance.state.images;
    expect(images.length).toEqual(5);
  });

  it('check methods componentDidUpdate', async () => {
    await snap
      .toTree()
      .rendered.rendered.instance.componentDidUpdate({appData: {images: []}});
    let images = snap.toTree().rendered.rendered.instance.state.images;
    expect(images.length).toEqual(5);
  });
});
