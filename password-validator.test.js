const validator = require("./password-validator");

const required = [
  { password: "   ", expected: validator.messages.required },
  { password: "", expected: validator.messages.required },
  { password: null, expected: validator.messages.required },
];

const length = [
  { password: "aB1}", expected: validator.messages.length },
  { password: "-", expected: validator.messages.length },
  { password: "1", expected: validator.messages.length },
  { password: "v", expected: validator.messages.length },
  { password: "0Aa@$1c", expected: validator.messages.length },
];

const number = [
  { password: "Aa$%#ddd}", expected: validator.messages.number },
  { password: "asdflkjleWERW%$#", expected: validator.messages.number },
  { password: "%%$$@#$@asdfDSdc", expected: validator.messages.number },
];

const specialCharacter = [
  { password: "asEd13222", expected: validator.messages.specialCharacter },
  { password: "oinsdfs123210980", expected: validator.messages.specialCharacter,},
  { password: "k0983453ASDd", expected: validator.messages.specialCharacter },
];

const lowerCase = [
  { password: "DFGDFD123!@@", expected: validator.messages.lowerCase },
  { password: "FGDF #$%#@2222", expected: validator.messages.lowerCase },
  { password: "LKFGDFODFKMNK%$##%#$#34345544", expected: validator.messages.lowerCase,},
];

const upperCase = [
  { password: "asdf sdsdf 3434@", expected: validator.messages.upperCase },
  { password: "okjdfgd#23oksdf$#", expected: validator.messages.upperCase },
  { password: "..sd.d..d.$$$4", expected: validator.messages.upperCase },
];

const valid = [
  { password: "t35tIng123*", expected: null },
  { password: "B8G*fW2#W$xRSuhB", expected: null },
  { password: "9C@M0d#xJvq3mD%MewV^iXqkLv4E6AiYp&YxAC2&#8qfhCCJGj#U7G@UAk0CxZwt", expected: null,},
  { password: "Cl4^1#Uh", expected: null },
  { password: "this.Pa55.w3Rk$", expected: null },
];

// run all tests
describe("validate(input)", () => {

  // valid passwords
  test.each(valid)("Valid password %o", (i) => {
    expect(validator.validate(i.password).password).toBeFalsy();
  });

  // password cannot be null, or whitespace onl
  test.each(required.filter((i) => i.expected))
  ("Password required %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
        i.expected
      );
    }
  );

  // passwords must be at least 8 character
  test.each(length.filter((i) => i.expected))
  ("Password to short %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
        i.expected
      );
    }
  );

  // passwords must contain at least one number
  test.each(number.filter((i) => i.expected))
  ("Password missing number %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
        i.expected
      );
    }
  );

  // passwords must contain at least one special character
  test.each(specialCharacter.filter((i) => i.expected))
  ("Password missing special character %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
          i.expected
      );
    }
  );

  // passwords must contain at least one lower-case letter
  test.each(lowerCase.filter((i) => i.expected))
  ("Password missing lowerCase letter %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
        i.expected
      );
    }
  );

  // passwords must contain at least one upper-case letter
  test.each(upperCase.filter((i) => i.expected))
  ("Password missing upper-case letter %o",
    (i) => {
      expect(validator.validate(i.password).password).toBe(
        i.expected
      );
    }
  );
});
