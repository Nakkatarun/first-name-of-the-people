const namesList = require("../country/state/city/index");

const getFirstNames = require("../utilities/utils/index");

const result = (namesList) => {
  return getFirstNames(namesList);
};

module.exports = result;
