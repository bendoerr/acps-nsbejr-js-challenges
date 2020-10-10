"use strict";

/**
 * Utility module for validating North American phone numbers
 *
 * @module phone-number-validator
 */
module.exports = {
  /**
   * Returns true if the input represents a valid North American phone number.
   *
   * The method argument must be a String containing only numbers and hyphens,
   * and must adhere to the format shown below.
   *
   * NXX-NXX-XXXX
   *
   * Where `X` is a number between 0 and 9, and `N` in the above example must
   * be a number between 2 and 9 inclusive.
   *
   * @returns {boolean}
   * @param {String} input
   */
  validate: function (input) {
    let tokens = input.split("-");
    if (tokens.length !== 3) {
      return false;
    }

    let areaCode = parseInt(tokens[0]);
    if (areaCode < 200 || areaCode >= 1000) {
      return false;
    }

    let subscriber = parseInt(tokens[1]);
    if (subscriber < 200 || subscriber >= 1000) {
      return false;
    }

    let suffix = tokens[2];
    if (suffix.length !== 4) {
      return false;
    }

    if (!parseInt(tokens[2])) {
      return false;
    }
    return true;
  },
};
