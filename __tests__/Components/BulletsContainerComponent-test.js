import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BulletsContainer from '../../Components/BulletsContainerComponent';
import imageData from '../ImageData.json';

describe('test bullet container component', () => {
  const images = imageData;
  it('match snapshot', () => {
    const snap = renderer.create(<BulletsContainer images={images} />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
