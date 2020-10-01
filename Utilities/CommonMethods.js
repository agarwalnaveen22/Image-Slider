import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
import {Constant} from './Constant';

class commonMethods {
  isInternetConnection = async () => {
    return await (await NetInfo.fetch()).isConnected;
  };
  showSuccessMessage = (message) => {
    Alert.alert(
      'Success',
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  };
  showErrorMessage = (message) => {
    Alert.alert(
      'Error',
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ],
      {cancelable: false},
    );
  };
  getRandomImages = (images) => {
    var limit = images.length;
    var randomNumbers = [];
    var randomImages = [];
    for (var n = 1; n <= limit; n++) {
      var i = Math.floor(Math.random() * limit + 1);
      if (!randomNumbers.includes(i) && images[i] !== undefined) {
        randomNumbers.push(i);
        let cimage = images[i];
        cimage.imageModifedUrl =
          Constant.API_URL + '200/300?image=' + images[i].id;
        randomImages.push(cimage);
      }
      if (randomNumbers.length === 5) {
        break;
      }
    }
    if (randomImages.length === 5) {
      return randomImages;
    } else {
      this.getRandomImages(images);
    }
  };
}
const CommonMethods = new commonMethods();
export default CommonMethods;
