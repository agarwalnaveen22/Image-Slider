import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BulletsContainer = ({images, currentIndex, bulletsStyle}) => {
  if (images.length > 0) {
    return images.map((data, index) => {
      return (
        <Icon
          name="circle"
          style={[styles.bullets, bulletsStyle]}
          solid={currentIndex === index ? true : false}
          key={index}
        />
      );
    });
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  bullets: {
    fontSize: 15,
    color: '#000000',
    paddingStart: 2,
    paddingEnd: 2,
    alignSelf: 'center',
  },
});

export default BulletsContainer;
