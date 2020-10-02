# ACPS NSBE Jr. JavaScript Challenges

👋 Hi Everyone! Here you will find similar challenges to the two that Noah
created to help you learn Python. Since you will already have a good idea how to
solve the two existing challenges, they were tweaked slightly to introduce new
challenges.

❗ Before starting these challenges, you should read over this [Mozilla Developer
Network JavaScript basic article][mdn_js_basics]. The MDN web docs are an
amazing resource where you can find many answers to common questions.

[mdn_js_basics]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

## 🔰 Dependencies

There are a few NPM dependencies that will be needed for your software to run.
There is one that helps us read from the terminal or console called
`readline-sync`. Then there are two development dependencies one to help us test
our code, and another to help make it pretty. These should be installed before
going much farther.

Type the following in the same directory as the code at the command line. If you
have the code open in WebStorm you can click the "Terminal" tab at the bottom.

```shell script
npm install
```

## ✔❌ Tests

Often when people write software and code, they will write more code that tests
their code. One type of test that is written is the Unit Test. A Unit Test is
targeted at testing the smallest testable parts of code. This is most often the
function or method. 

Both of the two challenges below have Unit Tests already written for them. When
you write your tests before writing your code, it's called Test-Driven 
Development (TDD)! It's really handy to run these tests as you are writing your
software. Pick a test case then write some code to make it pass, then pick the
next and before you know it you have working software. Or you can use the tests
after writing your code to validate that it does the right thing.

The included tests will be used to verify that you've completed the software 
correctly.

#### ▶ Running Tests

At the command line we can use NodeJS's build and dependency management tool to
execute these tests.

**Run All Tests**

```shell script
npm test
```

**Run Just the Calculator Tests**

```shell script
npm test -- calculator.test.js
```

**Run Just the High Low Game Tests**

```shell script
npm test -- calculator.test.js
```

## ✨ Formatting

Mentioned before is that there is a dependency included to help us format our
code. Consistent code style is very important ease reading and enhance
collaboration. If two people format their code in different ways it's hard to 
integrate them together and potentially could lead to bugs.

You can format any of your code at any type by typing the following at the
command line.

```shell script
npx prettier -w .
```

## 🖩 Challenge #1: Three Digit Integer Calculator

Let's rewrite your Python three digit integer calculator in Javascript. Like in
original. We will be writing some code that parses a `string` that is structured
as a three digit integer, followed by a space, an arithmetic operator, another
space, and then another three digit integer. The code should then evaluate the
expression. For example, if `"-200 + 150"` is given the calculated result would
be `-50`. Another example would be `"100 / 400"` with the result being `0.25`.

The number on either side of the operator must always be given as a 3 digit
integer, left padding the integer with zeros to make it 3 digits is allowed. For
example `"005"` and `"075"` are valid. You can look at the list of tests
[calculator.test.js](calculator.test.js) for more examples of valid and invalid
expressions.

Take a look at the file called [calulator.js](calculator.js). There are two
functions. You should complete these two functions (don't rename them, the test
cases rely on them being named). Just start typing your code in them.

```javascript
{
  parse: function (expression) {
    // TODO: Write a function that parses the given expression
    return null;
  },
  solve: function (expression) {
    // TODO: Write a function that uses the `parse(expression)` function
    //       to calculate the result
    return 0;
  },
}
```

The first function `parse(expression)` should take an expression and return a
value that can be used to solve the result. For example, maybe it returns an
"array" containing the three tokens. Another option would be to return a
JavaScript object containing the three tokens. Regardless of what is
returned for a parsed expression. If that expression cannot be parsed, you
should return a `null` or other falsy value to indicate an error.

The second function `solve(expression)` should take an expression, then use the
`parse(expression)` function to parse it, and finally evaluate the result
returning it from the function. If the expression cannot be parsed, return a
`null` to indicate an error.

The run loop has already been written for you. You can try your calculator out
by typing the following at the command line.

```shell script
npm run calc
```

## 〽️ Challenge #2: High Low Game

Again just like the first challenge, let's rewrite the High/Low game in
JavaScript. This is a game were you are asked to guess a number between 1 and 
100 while only being told if your guess is higher or lower than the target.

Take a look at the [high-low.js](high-low.js) file. There are 4 TODO comments.
In addition to these functions, variables and TODO comments, you will find lots
of documentation describing the expected behavior of each function.

You can run the game by typing the following at the command line. However for
this challenge you will need to complete the game loop as well.

```shell script
npm run high-low
```

Complete each `TODO` as described by the function documentation and use the
tests in [high-low.test.js](high-low.test.js) as a guide.

