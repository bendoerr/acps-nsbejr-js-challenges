/**
 * This module contains our High Low game.
 *
 * See calculator.js for more information about JavaScript modules.
 *
 * @module high_low
 */
module.exports = {
  /**
   * The number that the user is trying to guess.
   *
   * It should be a random integer between 1 and 99 inclusive that is reset
   * to a new random number any time the `reset(max_guesses)` function is
   * called.
   */
  targetNumber: 0,

  /**
   * Used to track how many guesses have been made.
   *
   * Reset to zero when the `reset(max_guesses)` function is called.
   */
  curNumOfGuesses: 0,

  /**
   * Used to track the current max number of guesses.
   *
   * Reset to a user supplied value when the `reset(max_guesses)` function is
   * called.
   */
  maxNumOfGuesses: 0,

  /**
   * Before each game, this function should be called to reset the state of
   * the game as well as provide a new maximum number of guesses.
   *
   * In addition to setting the new maximum number of guesses it should reset
   * the current number of guesses to zero and set a new target number.
   *
   * The target number should be a number between 1 and 99 including 1 and 99,
   * and tt should be a "uniformly random" number.
   *
   * Use `Math.random()` to get a random number between 0 (inclusive) and
   * 1 (exclusive). You will need to figure out how to convert that to a
   * number between 1 and 99 "uniformly"
   *
   * @param {int} maxGuesses is the new maximum number of guesses for the
   *                 current game
   * @return {void}
   */
  reset: function (maxGuesses) {
    // TODO: Write a function that resets the game state
  },

  /**
   * Guess will evaluate a given number and increase the current number of
   * guesses by one.
   *
   * If a guess is greater than the target number, then 1 is returned.
   * If a guess is less than the target number, then -1 is returned.
   * If a guess matches the target number, then 0 is returned.
   *
   * @param {int} num A guess to compare against our target number.
   * @return {int} One of [-1,0,1]
   */
  guess: function (num) {
    // TODO: Write a function that evaluates a guess
    return 0;
  },

  /**
   * Checks to see if the maximum number of guesses has been made.
   *
   * @return {boolean} true if the current number of guesses have been made,
   *                   otherwise false
   */
  isOutOfGuesses: function () {
    // TODO: Write a function that checks the number of guesses
    return true;
  },

  /**
   * The main game-loop for our game of High/Low. The main game loop should use
   * the other functions to evaluate our game.
   *
   * 1. Greet the player and ask them if they would like to play
   *     a. If they press the 'n' key, say goodbye and exit
   *     b. If they press the 'y' key, continue with the game
   *     c. If they press any other key, repeat the question
   * 2. Ask the player how many guesses they would like to take
   *     a. If they respond with an integer, use that and reset the game
   *     b. If they do not respond with an integer, repeat the question
   * 3. Have the player guess a number between 1 and 99
   *     a. If they respond with -1, say goodbye and exit
   *     b. If they otherwise answer with an integer but it is outside the
   *        valid range of 1-99, or if the response is not an integer then
   *        repeat the question
   *     c. If the response is greater than or less than, tell the user and
   *        then continue
   *     d. If the response is right, tell the user and go to step 1
   * 4. Check if the user has guessed too many times
   *     a. If too many guesses have been made, tell the user and goto step 1
   *     b. If they still have guesses go to step 3
   *
   * You can run this by typing "npm run high-low" at the command line.
   */
  run: function () {
    const readline = require("readline-sync");

    while (true) {
      const r = readline.question("Hello! Ready to play? [yn]: ");
      if (r === "n") {
        console.log("Goodbye!");
        break;
      } else if (r !== "y") {
        continue;
      }

      // TODO: Complete the rest of the game loop and logic
      //       The test cases do not cover this function so you will have
      //       to manually test and verify it.
    }
  },
};
