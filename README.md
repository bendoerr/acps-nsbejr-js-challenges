# ACPS NSBE Jr. JavaScript Challenges

👋 Hi Everyone! Here you will find similar challenges to the two that Noah
created to help you learn Python. Since you will already have a good idea how to
solve the two existing challenges, they were tweaked slightly to introduce new
challenges.

❗ Before starting these challenges, you should read over this [Mozilla Developer
Network JavaScript basic article][mdn_js_basics]. The MDN web docs are an
amazing resource where you can find many answers to common questions.

[mdn_js_basics]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

## Challenge #1: Three Digit Integer Calculator 🖩

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
  parse: function (expression) {
    // TODO: Write a function that parses the given expression
    return null;
  },
  solve: function (expression) {
    // TODO: Write a function that uses the `parse(expression)` function
    //       to calculate the result
    return 0;
  },
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
