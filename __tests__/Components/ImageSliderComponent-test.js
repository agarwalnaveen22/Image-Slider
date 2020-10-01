import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImageSlider from '../../Components/ImageSliderComponent';
import imageData from '../ImageData.json';

describe('test image slider component', () => {
  const images = imageData;
  var snap;
  beforeEach(() => {
    snap = renderer.create(<ImageSlider images={images} />);
  });
  it('match snapshot', () => {
    expect(snap.toJSON()).toMatchSnapshot();
  });
});
