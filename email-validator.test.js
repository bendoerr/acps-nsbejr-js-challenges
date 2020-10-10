const validator = require("./email-validator");

const invalid = [
  { email: "@" },
  { email: "me@" },
  { email: "@gmail.com" },
  { email: '"@example.com' },
  { email: "'@apple.com" },
  { email: "you.example.com" },
  { email: "" },
  { email: null },
  { email: "me@sub@example.com" },
  { email: "me.and.you@gmail." },
  { email: ".you@gmail.com" },
  {
    email:
      "long@cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.com",
  },
];

const valid = [
  { email: "you@gmail.com" },
  { email: "first.last@sub.example.com" },
  {
    email:
      "long@ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.com",
  },
  { email: "me@subsub.sub.example.com" },
  { email: "you@example.org" },
  { email: "you@example.io" },
  { email: "you@example.software" },
];

describe("validate(input)", () => {
  test.each(invalid)("Invalid email address %o", (invalid) => {
    expect(validator.validate(invalid.email)).toBe(false);
  });
  test.each(valid)("Valid email address %o", (valid) => {
    expect(validator.validate(valid.email)).toBe(true);
  });
});
