"use strict";

/**
 * Utility module for validating North American phone numbers
 *
 * @module phone-number-validator
 */
module.exports = {
  messages: {
    format: "Invalid phone number format.",
    areaCode: "Invalid area code.",
    subscriber: "Invalid subscriber number.",
    suffix: "Invalid suffix.",
    required: "Phone number is required.",
  },

  /**
   * Returns true if the input represents a valid North American phone number.
   *
   * The method argument must not be null, and must be a non-empty String
   * containing only numbers and hyphens, and must adhere to the format shown
   * below.
   *
   *      NXX-NXX-XXXX
   *
   * Where `X` is a number between 0 and 9, and `N` in the above example must
   * be a number between 2 and 9 inclusive.
   *
   * If input does not pass validation, this method must return an object with a
   * String property named `phoneNumber`. The value of this String should contain
   * the value of this module's `messages` object which describes why the phone
   * number is invalid.
   *
   * For example, if the area code begins with `1`, the error object should have
   * `this.messages.format` applied to the error object's `phoneNumber` attribute.
   *
   * @returns {Object}
   * @param {String} input
   */
  validate: function (input) {
    return null;
  },
};
