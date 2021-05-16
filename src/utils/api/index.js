import { API_BASE_URL } from '../constants';

/**
 * Make a request to the given url using the API_BASE_URL as the base
 * @param {string} url URL of the request
 * @returns {Promise<Response>} Promise of the request
 */
const fetcher = (url) =>
  fetch(`${API_BASE_URL}${url}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw response;
  });

export { fetcher };
