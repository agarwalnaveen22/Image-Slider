import React, {Component, createRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BulletsContainer from './BulletsContainerComponent';
import Slides from './SlidesComponent';

class ImageSlider extends Component {
  slider = createRef();
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      this.changeSlide(viewableItems[0].index);
      this.setState({currentIndex: viewableItems[0].index});
    }
  };
  changeSlide = (index) => {
    this.slider.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };
  renderSliderImages = ({item}) => {
    return (
      <Slides
        item={item}
        sliderStyle={this.props.sliderStyle}
        sliderImagesStyle={this.props.sliderImagesStyle}
        authorContainerStyle={this.props.authorContainerStyle}
        imageUrl={item[this.props.imageUrlId]}
      />
    );
  };
  render() {
    return (
      <View>
        <View style={[styles.sliderContainer, this.props.sliderContainerStyle]}>
          <FlatList
            ref={this.slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.images}
            renderItem={this.renderSliderImages}
            viewabilityConfig={{
              waitForInteraction: true,
              itemVisiblePercentThreshold: 75,
            }}
            onViewableItemsChanged={this.onViewableItemsChanged}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.bulletsContainer}>
          <BulletsContainer
            images={this.props.images}
            currentIndex={this.state.currentIndex}
            bulletsStyle={this.props.bulletsStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bulletsContainer: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageSlider;
