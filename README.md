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

## ❓ Challenge #3: Input Validators

Consider the signup process for`QRTrace` ...

**Q:**  Do we want users signing up with email addresses that clearly aren't valid?  What about verification links? Suppose a user just misses a single character in their address, e.g., `first.last@gmailcom`...

> No.

**Q:** Do we want users using super weak and insecure passwords, e.g.,`abc123`?

> Also no.

Providing a means of verifying the validity of user input is the basis for the challenged to follow.

---

There are three validator modules to implement, each with a single function for you to implement; `validate(input)`.  Each of the validators should construct and return a simple `Object` that describes the nature of the input's validity. 

Take a look at Mozilla Developer page [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) for help understanding objects.

One simple way to construct an `Object` in JavaScript is to just use brackets when initializing a variable.

```javascript
// A user or person Object...
const creatorOfJavaSCript = {
    firstName: "Brendan",
    lastName: "Eich"
}

// A film?
const odyssey = {
  title: "2001: A Space Odyssey",
  imdb: "https://www.imdb.com/title/tt0062622"
}
```
Each validator's `validate` function as documentation describing what makes `input` valid or invalid. Be sure to read each method doc carefully!

Each `validate` implementation should return an error `Object` to the following specification:

 - If the function parameter `input` is considered valid per the requirements described in the code documentation, the `validate` method should return an *empty* `Object`
 - If `input` is invalid, the error `Object` returned should contain a single attribute named according to the thing the validator is validating (e.g., `email`, `password`,`phoneNumber`). 

For example, if the `validate` [email-validator.js](email-validator.js) function is called with an input that does not have an `@` in it, the `Object` returned should contain an attribute `email` with a message specific to the reason why it is invalid. Again, please read the documentation in each validator module carefully.

None of the validator modules have a command line runner. Just code, run the tests, and repeat until they all pass.


### 📲 Phone Number Validation

The `validate(input)` method in [phone-number-validator.js](phone-number-validator.js) should return an object with an error message if the input parameter is not valid North American phone number.

Similar to the prior challenges, you can run your tests as follows

```shell
npm test -- phone-number-validator.test.js
```

### 📥 Email Address Validation

Similar to the phone number validator,  [email-validator.js](email-validator.js) will be checking the `input` parameter for some (not all!) of the basic bits and pieces that make up a valid email address.

```shell
npm test -- email-validator.test.js
```

### 🔑 Password Validation

And... yeah, you may have picked up on the pattern here – [password-validator.js](password-validator.js) will be have the exact same way as the email or phone number validators, but will check against the password validity criteria defined in this module's documentation.

```shell
npm test -- password-validator.test.js
```


