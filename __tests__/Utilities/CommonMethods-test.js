import CommonMethods from '../../Utilities/CommonMethods';
import {Alert} from 'react-native';
import imageData from '../ImageData.json';

describe('test common methods', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('getRandomImages called', () => {
    const randomImages = CommonMethods.getRandomImages(imageData);
    expect(randomImages.length).toEqual(5);
  });
  it('check success message', () => {
    jest.spyOn(Alert, 'alert');
    let successMessage = 'success test message';
    CommonMethods.showSuccessMessage(successMessage);
    expect(Alert.alert.mock.calls[0][1]).toEqual(successMessage);
  });
  it('check error message', () => {
    jest.spyOn(Alert, 'alert');
    let errorMessage = 'error test message';
    CommonMethods.showErrorMessage(errorMessage);
    expect(Alert.alert.mock.calls[0][1]).toEqual(errorMessage);
  });
});
