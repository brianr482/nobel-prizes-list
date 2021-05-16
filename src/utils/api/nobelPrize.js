import { fetcher } from './';
const BASE_ENDPOINT = `prize.json`;

/**
 * Fetch a list of Nobel Prizes filtered by the given paramerets
 * @param {object} Paramereters Query parameters to filter the Nobel Prizes
 * @returns {Promise<Response>} Promise of the request
 */
export const fetchPrizes = ({ year, yearTo, category, numberOfLaureates }) => {
  const searchParams = new URLSearchParams({});

  if (year) {
    searchParams.append('year', year);
  }

  if (yearTo) {
    searchParams.append('yearTo', yearTo);
  }

  if (category) {
    searchParams.append('category', category);
  }

  if (numberOfLaureates) {
    searchParams.append('numberOfLaureates', numberOfLaureates);
  }

  const searchParamsString = searchParams.toString();
  const queryParams = searchParamsString ? `?${searchParamsString}` : '';

  return fetcher(`${BASE_ENDPOINT}${queryParams}`);
};
