import Api from './Api';

export const loadImagesApi = async (data) => {
  return await Api.get('list', data);
};
