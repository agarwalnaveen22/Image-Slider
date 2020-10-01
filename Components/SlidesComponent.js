import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Slides = ({
  item,
  sliderStyle,
  sliderImagesStyle,
  authorContainerStyle,
  imageUrl,
}) => {
  return (
    <View style={[styles.slider, sliderStyle]}>
      <View style={authorContainerStyle}>
        <Text>{item.author}</Text>
      </View>
      <Image
        style={sliderImagesStyle}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Slides;
