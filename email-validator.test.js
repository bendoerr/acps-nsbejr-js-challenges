const validator = require("./email-validator");

const required = [
  { email: "   ", expected: validator.messages.required },
  { email: "", expected: validator.messages.required },
  { email: null, expected: validator.messages.required },
];

const format = [
  { email: "@", expected: validator.messages.format },
  { email: "me@", expected: validator.messages.format },
  { email: "@example.com", expected: validator.messages.format },
  { email: '"@example.com', expected: validator.messages.format },
  { email: "'@apple.com", expected: validator.messages.format },
  { email: "you.example.com", expected: validator.messages.format },
  { email: "me@sub@example.com", expected: validator.messages.format },
  { email: "me.and.you@example.", expected: validator.messages.format },
  { email: ".you@example.com", expected: validator.messages.format },
];
const localPart = [
  { email: ".@example.com", expected: validator.messages.localPart },
  { email: "'@.example.com", expected: validator.messages.localPart },
  { email: '"@example.com', expected: validator.messages.localPart },
  { email: '"mark@example.com', expected: validator.messages.localPart },
  { email: 'mark"@example.com', expected: validator.messages.localPart },
  { email: "'mark@apple.com", expected: validator.messages.localPart },
  { email: "mark'@apple.com", expected: validator.messages.localPart },
  { email: "    @example.com", expected: validator.messages.localPart },
  { email: " @example.com", expected: validator.messages.localPart },
];
const hostname = [
  { email: "you@gamil", expected: validator.messages.hostname },
  { email: "ben@-example.com", expected: validator.messages.hostname },
  { email: "eric@example-.com", expected: validator.messages.hostname },
  { email: "kellie@-example-.com", expected: validator.messages.hostname },
  { email: "kellie@    ", expected: validator.messages.hostname },
  { email: 'alicia@cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.com",', expected: validator.messages.hostname,},
];

const valid = [
  { email: "me@example.com", expected: null },
  { email: "!#$%-^&*(@example.com", expected: null },
  { email: "first.middle.last@example.com", expected: null },
  { email: "first.lase@a.b.c.d.example.com", expected: null },
  { email: "you@cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.com", expected: null,},
];

// run all email validity tests
describe("validate(input)", () => {
  // test for valid email addresses
  test.each(valid)("Valid email address %o", (i) => {
    expect(validator.validate(i.email).email).toBeFalsy();
  });

  // emails cannot be null or whitespace only
  test.each(required.filter((i) => i.expected))(
    "Email address is required %o",
    (i) => {
      expect(validator.validate(i.email).email).toBe(i.expected);
    }
  );

  // test for invalid email address format
  test.each(format.filter((i) => i.expected))(
    "Invalid email format %o",
    (i) => {
      expect(validator.validate(i.email).email).toBe(i.expected);
    }
  );

  // test invalid local-parts
  test.each(localPart.filter((i) => i.expected))(
    "Invalid local-part %o",
    (i) => {
      expect(validator.validate(i.email).email).toBe(i.expected);
    }
  );

  // test invalid hostnames
  test.each(hostname.filter((i) => i.expected))("Invalid hostname %o", (i) => {
    expect(validator.validate(i.email).email).toBe(i.expected);
  });
});
