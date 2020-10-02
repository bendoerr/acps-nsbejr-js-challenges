"use strict";

/**
 * This is the JavaScript module for our Three Digit Integer Calculator
 *
 * A JavaScript module is a way for us to organize our code so that everything
 * is not in the global namespace. In the old days, when someone wrote a
 * function named "calculate" and you used their code then you wrote a function
 * named "calculate" they would collide and one of those functions would be
 * overwritten. Modules help us prevent that by namespacing (grouping under a
 * name) our functions.
 *
 * Mozilla has a great description and background on about JavaScript modules.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 * @module calculator
 */
module.exports = {
  /**
   * Accepts an `expression` which is a string that is structured in the
   * following way:
   *
   *   "[Number] [Operator] [Number]"
   *
   *   Where
   *      Number:   An integer between -999 and 999. Pad 'ones' and 'tens'
   *                with zeros on the left so that there are always three
   *                digits.
   *      Operator: One of the following
   *                '+' for addition
   *                '-' for subtraction
   *                '*' for multiplication
   *                '/' for division
   *
   * For a valid expression. The three components will be returned.
   *
   * If the given expression does not match this structure then a falsy
   *
   * @param {String} expression
   * @return the parsed results if valid or a falsy value if the expression
   *         could not be parsed
   */
  parse: function (expression) {
    // TODO: Write a function that parses the given expression
    return null;
  },

  /**
   * Accepts an `expression` which can by parsed by the `parse(expression`
   * function. Then computes the answer.
   *
   * @param expression
   * @return the result of the expression or `null` if that expression cannot
   *         be parsed
   */
  solve: function (expression) {
    // TODO: Write a function that uses the `parse(expression)` function
    //       to calculate the result
    return 0;
  },

  /**
   * The main run loop. Asks for expressions and solves to results.
   *
   * You can run this by typing "npm run calc" at the command line.
   */
  run: function () {
    const readline = require("readline-sync");

    while (true) {
      const e = readline.question("Enter an expression or type 'stop': ");

      if (e.toLowerCase() === "stop") {
        console.log("Goodbye!");
        break;
      }

      const result = this.solve(e);
      if (result == null) {
        console.log("Invalid expression");
        continue;
      }

      console.log(`Result: ${result}`);
    }
  },
};
