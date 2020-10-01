import apisauce from 'apisauce';
import CommonMethods from '../Utilities/CommonMethods';
import {Constant} from '../Utilities/Constant';

class _Api {
  api = null;
  constructor() {
    let baseURL = Constant.API_URL;
    this.api = apisauce.create({
      baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 90000,
    });
  }

  sendResponse = async (response, resolve) => {
    if (response.ok) {
      resolve(response.data);
    } else {
      CommonMethods.showErrorMessage(response.originalError.message);
      resolve(false);
    }
  };

  get = async (url, data) => {
    if (await CommonMethods.isInternetConnection()) {
      return new Promise(async (resolve) => {
        this.api.get(url, data).then((response) => {
          this.sendResponse(response, resolve);
        });
      });
    } else {
      CommonMethods.showErrorMessage(Constant.NO_INTERNET);
    }
  };
}

let Api = new _Api();
export default Api;
