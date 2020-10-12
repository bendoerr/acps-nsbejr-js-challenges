"use strict";

/**
 * Utility module for validating passwords
 *
 * @module password-validator
 */
module.exports = {
  messages: {
    required: "Password is required.",
    length: "Password is too short.",
    number: "Password must contain at least one number.",
    specialCharacter: "Password must contain at least special character.",
    lowerCase: "Password must contain at least one lower-case letter.",
    upperCase: "Password must contain at least one upper-case letter.",
  },
  /**
   * If the input parameter is not a valid password, this function must return an error object with a single attribute named `password` containing the message which best desribed the reason it is invalid.
   * If the input parameter is a valid password, this function must return an empty error object.
   *
   * Validity criteria and expectations:
   *  - If the input is null or empty:
   *    - The error object's `password` attribute must contain the `retuired` message.
   *  - If input is shorter than 8 characters:
   *    - The error object's `password` attribute must contain the `length` message.
   *  - If input does not contain at least one special character (e.g., !$%...):
   *    - The error object's `password` attribute must contain the `specialCharacter` message.
   *  - If input does not contain at least one upper-case letter:
   *    - The error object's `password` attribute must contain the `upperCase` message.
   *  - If input does not contain at least one lower-case letter:
   *    - The error object's `password` attribute must contain the `lowerCase` message.
   *
   * If the input passes all validity criteria, this method should return an empty error object.
   *
   * @returns {Object}
   * @param {String} input
   */
  validate: function (input) {
    return null;
  },
};
