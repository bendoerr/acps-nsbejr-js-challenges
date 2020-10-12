"use strict";

/**
 * Utility module for validating email addresses
 *
 * @module email-validator
 */
module.exports = {
  messages: {
    format: "Invalid email format.",
    localPart: "Invalid local-part.",
    hostname: "Invalid hostname.",
    required: "Email address is required.",
  },
  /**
   * # Email Validation
   *
   * ## Overview
   *
   * Returns and error object describing the validity of the input as an email address.
   *  - If the input represents a valid email address, the object returned should be empty.
   *  - If the input represents an invalid email address, the object returned should have a single attribute named `email`
   *  containing the message provided by this module that best describes the failure.
   *
   * An email is considered valid if it contains a properly formatted `local-part`,
   * and a properly formatted domain (hostname) joined by an `@` symbol.
   *
   * The input parameter can not be null or empty, and can only contain on `@` symbol.
   *
   * ## Format
   * The input should fail with the `format` message if
   *  - The input does not contain just one `@` character.
   *
   * ## Local-Part
   * The input should fail with the `localPart` message if the `local-part`:
   *  - begins or ends with a dot (`.`).
   *  - contains single or double quotes.
   *  - consists of only whitespace.
   *
   * ## Domain
   * The input should fail with the `hostname` message if the hostname part:
   *  - begins or ends with a hyphen.
   *  - begins or ends with a dot.
   *  - exceeds 253 characters in length.
   *  - consists of only whitespace.
   *
   * @returns {Object}
   * @param {String} input
   */
  validate: function (input) {
    return null;
  },
};
