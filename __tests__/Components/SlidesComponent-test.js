import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Slides from '../../Components/SlidesComponent';

describe('test slides component', () => {
  const data = {
    item: {
      author: 'Danielle MacInnes',
    },
  };
  it('match snapshot', () => {
    const snap = renderer.create(<Slides item={data} />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
