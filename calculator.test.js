const test_table = [
  { expr: "001 + 001", result: 2 },
  { expr: "111 + 111", result: 222 },
  { expr: "999 + 999", result: 1998 },
  { expr: "200 + 300", result: 500 },
  { expr: "-001 + 001", result: 0 },
  { expr: "-999 + 999", result: 0 },
  { expr: "-200 + 300", result: 100 },
  { expr: "-200 + 100", result: -100 },
  { expr: "001 + -001", result: 0 },
  { expr: "999 + -999", result: 0 },
  { expr: "200 + -300", result: -100 },
  { expr: "200 + -100", result: 100 },
  { expr: "1 + 2", result: null },
  { expr: "11111111111111111111111 + 200", result: null },
  { expr: "11 + 200", result: null },
  { expr: "1 + 200", result: null },
  { expr: "200 + 2", result: null },
  { expr: "200 + 22", result: null },
  { expr: "200 +100", result: null },
  { expr: "200+ 100", result: null },
  { expr: "200+100", result: null },
  { expr: "200 + 2222222222", result: null },
  { expr: "001 - 001", result: 0 },
  { expr: "111 - 111", result: 0 },
  { expr: "999 - 999", result: 0 },
  { expr: "200 - 300", result: -100 },
  { expr: "-001 - 021", result: -22 },
  { expr: "-111 - 200", result: -311 },
  { expr: "-999 - 999", result: -1998 },
  { expr: "-200 - 300", result: -500 },
  { expr: "-200 - 100", result: -300 },
  { expr: "001 - -001", result: 2 },
  { expr: "111 - -111", result: 222 },
  { expr: "999 - -999", result: 1998 },
  { expr: "200 - -300", result: 500 },
  { expr: "200 - -100", result: 300 },
  { expr: "1 - 2", result: null },
  { expr: "11111111111111111111111 - 200", result: null },
  { expr: "11 - 200", result: null },
  { expr: "1 - 200", result: null },
  { expr: "200 - 2", result: null },
  { expr: "200 - 22", result: null },
  { expr: "200 - 2222222222", result: null },
  { expr: "5 * 3", result: null },
  { expr: "98124 * 153", result: null },
  { expr: "453 * 342342", result: null },
  { expr: "453 * 42", result: null },
  { expr: "24 * 153", result: null },
  { expr: "5 / 3", result: null },
  { expr: "98124 / 153", result: null },
  { expr: "453 / 342342", result: null },
  { expr: "453 / 42", result: null },
  { expr: "24 / 153", result: null },
  { expr: "002 * 002", result: 4 },
  { expr: "100 * 002", result: 200 },
  { expr: "002 * 100", result: 200 },
  { expr: "200 * 100", result: 20000 },
  { expr: "-200 * 100", result: -20000 },
  { expr: "200 * -100", result: -20000 },
  { expr: "-200 * -100", result: 20000 },
  { expr: "002 / 002", result: 1 },
  { expr: "100 / 002", result: 50 },
  { expr: "002 / 100", result: 0.02 },
  { expr: "200 / 100", result: 2 },
  { expr: "-200 / 100", result: -2 },
  { expr: "200 / -100", result: -2 },
  { expr: "-200 / -100", result: 2 },
];

const calculator = require("./calculator");

describe("parse(expression)", () => {
  describe("rejects invalid inputs", () => {
    test.each(test_table.filter((r) => r.result == null))("%o", (r) => {
      expect(calculator.parse(r.expr)).toBeFalsy();
    });
  });

  describe("accepts valid inputs", () => {
    test.each(test_table.filter((r) => r.result != null))("%o", (r) => {
      expect(calculator.parse(r.expr)).toBeTruthy();
    });
  });
});

describe("solve(expression)", () => {
  describe("returns null for invalid inputs", () => {
    test.each(test_table.filter((r) => r.result == null))("%o", (r) => {
      expect(calculator.solve(r.expr)).toBeNull();
    });
  });

  describe("computes the correct result", () => {
    test.each(test_table.filter((r) => r.result != null))("%o", (r) => {
      expect(calculator.solve(r.expr)).toBe(r.result);
    });
  });
});
