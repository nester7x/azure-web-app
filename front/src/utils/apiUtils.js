const BASE_URL = 'https://filestorage228.azurewebsites.net/';

const handleResponse = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const api = {
  post: (endpoint, data) =>
    fetch(BASE_URL + endpoint, {
      method: 'POST',
      body: data
    }).then(handleResponse)
};
