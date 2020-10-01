import Api from '../../Services/Api';
import {Alert} from 'react-native';

describe('test api file', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('test sendResponse menthod for success', async () => {
    let mockResponse = {
      ok: true,
      data: true,
    };
    const resp = new Promise((resolve) => {
      Api.sendResponse(mockResponse, resolve);
    });
    expect(await resp).toBe(mockResponse.data);
  });

  it('test sendResponse menthod for fail', async () => {
    jest.spyOn(Alert, 'alert');
    let mockResponse = {
      ok: false,
      originalError: {
        message: 'Error',
      },
    };
    const resp = new Promise((resolve) => {
      Api.sendResponse(mockResponse, resolve);
    });
    await resp;
    expect(Alert.alert.mock.calls[0][1]).toEqual(
      mockResponse.originalError.message,
    );
  });
});
