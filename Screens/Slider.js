import React, {Component} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {loadImagesRequest} from '../Actions';
import CommonMethods from '../Utilities/CommonMethods';
import ImageSlider from '../Components/ImageSliderComponent';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      refreshing: false,
    };
  }

  setData = async () => {
    this.props.loadImagesRequest({});
  };
  onRefresh = async () => {
    await this.setState({refreshing: true});
    let randomImages = CommonMethods.getRandomImages(this.props.appData.images);
    await this.setState({images: randomImages, refreshing: false});
  };
  async componentDidUpdate(prevProps) {
    if (prevProps.appData.images !== this.props.appData.images) {
      let randomImages = CommonMethods.getRandomImages(
        this.props.appData.images,
      );
      await this.setState({images: randomImages});
    }
  }
  componentDidMount() {
    this.setData();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.body}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }>
          {this.props.appData.loading ? (
            <ActivityIndicator
              size="large"
              color="#000000"
              style={styles.refreshBtn}
            />
          ) : (
            <ImageSlider
              images={this.state.images}
              sliderContainerStyle={styles.sliderContainer}
              sliderStyle={styles.slider}
              sliderImagesStyle={styles.sliderImages}
              bulletsStyle={styles.bullets}
              authorContainerStyle={styles.authorContainer}
              imageUrlId="imageModifedUrl"
            />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '40%',
    backgroundColor: '#ffffff',
  },
  body: {
    width: 220,
    height: 370,
    borderWidth: 1,
    borderRadius: 5,
  },
  refreshBtn: {
    top: '40%',
  },
  sliderContainer: {
    width: '100%',
    height: 340,
  },
  slider: {
    width: 220,
    height: 340,
  },
  sliderImages: {
    width: 200,
    height: 300,
    marginStart: 10,
    marginEnd: 10,
  },
  authorContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bullets: {
    fontSize: 15,
    color: '#000000',
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  loadImagesRequest,
})(Slider);
