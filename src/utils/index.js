/**
 * Generate label to indicate the total number of laureates
 * @param {number} lauratesTotal Total of laureates of a Nobel Prize
 * @returns {string} Formatted label indicating the number of laureates
 */
export const getLaureatesNumber = (laureatesTotal) => {
  return `${laureatesTotal} ${
    laureatesTotal > 1 ? 'laureates' : 'laureate'
  } for this Nobel`;
};

/**
 * Get fullname of the given Noebl Prize laureate author
 * @param {object} laureate Laureate author
 * @returns {string} Full name of the given author
 */
export const getLaureateFullName = (laureate) => {
  let fullname = laureate.firstname;
  if (laureate.surname) {
    fullname += ` ${laureate.surname}`;
  }

  return fullname;
};

/**
 * Concat all the laureates names into single string separated by commas
 * @param {object[] | string[]} laureates List of laureates/laureates names for the current Nobel
 * @param {string} listOfFullNames Indicates if the laureates parameter is a string list of the fullnames
 * @returns {string} Formatted label indicating the names of laureates
 */
export const getLaureatesNames = (laureates, listOfFullNames) => {
  let laureatesNames = '';
  const laureatesTotal = laureates.length;
  laureates.forEach((laureate, idx) => {
    const fullName = listOfFullNames ? laureate : getLaureateFullName(laureate);

    if (laureatesTotal > 1) {
      if (idx === laureatesTotal - 1) {
        laureatesNames += `and ${fullName}`;
      } else {
        laureatesNames += `${fullName}, `;
      }
    } else {
      laureatesNames = fullName;
    }
  });

  return laureatesNames;
};

/**
 * Uppercase the first character of a given string
 * @param {string} str String to be applied
 */
export const upperFirst = (str) =>
  str !== '' ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : '';
