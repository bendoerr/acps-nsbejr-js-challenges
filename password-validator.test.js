const validator = require("./password-validator");

const invalid = [
  { password: "password123" },
  { password: "abc" },
  { password: "        " },
  { password: "1Ab*" },
  { password: "this is a long password, but missing required characters." },
  { password: "111111" },
  { password: "............" },
  { password: "AAAAAA1}" },
  { password: "d1!1E" },
];

const valid = [
  { password: "t35tIng123*" },
  { password: "B8G*fW2#W$xRSuhB" },
  {
    password:
      "9C@M0d#xJvq3mD%MewV^iXqkLv4E6AiYp&YxAC2&#8qfhCCJGj#U7G@UAk0CxZwt",
  },
  { password: "Cl4^1#Uh" },
  { password: "this.Pa55.w3Rk$" },
];

describe("validate(input)", () => {
  test.each(invalid)("Invalid password %o", (invalid) => {
    expect(validator.validate(invalid.password)).toBe(false);
  });
  test.each(valid)("Valid password %o", (valid) => {
    expect(validator.validate(valid.password)).toBe(true);
  });
});
