"use strict";

/**
 * Utility module for validating email addresses
 *
 * @module email-validator
 */
module.exports = {
  /**
   * Returns true if the input represents a valid email address.
   *
   * An email is considered valid if it contains a local-part,
   * and a domain joined by an `@` symbol
   *
   * The `local-part` can:
   *  - contain any letter, number, or symbol (see symbol exceptions)
   * The `local-part` cannot:
   *  - begin or end with a dot (`.`)
   *  - contain single or double quotes
   *  - contain an `@` symbol
   *
   * The `domain` must be a valid hostname.
   *
   * A hostname must:
   *  - contain at least one dot
   * A hostname can:
   *  - contain lower and upper-case letters
   *  - contain numbers
   *  - contain hyphens
   *  - contain dots
   * A hostname cannot:
   *  - begin or end with a hyphen.
   *  - begin or end with a dot.
   *  - exceed 253 characters in length.
   *  - contain an `@` symbol
   *
   * @returns {boolean}
   * @param {String} input
   */
  validate: function (input) {
    return null;
  },
};
