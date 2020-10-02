const highLow = require("./high-low");
const mathCopy = Object.create(global.Math);
const randomReset = () => {
  global.Math = mathCopy;
};
let mockRandomReturn = 0.5;
let mockRandomInst = null;

const randomMock = () => {
  mockRandomInst = jest.fn(() => mockRandomReturn);
  global.Math.random = mockRandomInst;
};

describe("reset(maxGuesses)", () => {
  test("sets the maxNumOfGuesses to the given value (5)", () => {
    highLow.reset(5);
    expect(highLow.maxNumOfGuesses).toBe(5);
  });

  test("sets the maxNumOfGuesses to the given value (11)", () => {
    highLow.reset(11);
    expect(highLow.maxNumOfGuesses).toBe(11);
  });

  test("sets curNumOfGuesses to zero", () => {
    highLow.curNumOfGuesses = 10;
    highLow.reset(0);
    expect(highLow.curNumOfGuesses).toBe(0);
  });

  test("keeps curNumOfGuesses as zero if it already is", () => {
    highLow.curNumOfGuesses = 0;
    highLow.reset(0);
    expect(highLow.curNumOfGuesses).toBe(0);
  });

  describe("targetNumber is set correctly", () => {
    beforeEach(() => {
      randomMock();
    });

    afterEach(() => {
      randomReset();
    });

    test.each([
      [0.0, 1],
      [0.001, 1],
      [0.05, 5],
      [0.055, 6],
      [0.1, 10],
      [0.2284, 23],
      [0.25, 25],
      [0.5, 50],
      [0.5005, 50],
      [0.681234, 68],
      [0.71456, 71],
      [0.99, 99],
      [0.99555423, 99],
      [0.999999, 99],
    ])("when random() returns %d", (rand, expected) => {
      mockRandomReturn = rand;
      highLow.reset(0);
      expect(highLow.targetNumber).toBe(expected);
    });
  });
});

describe("guess(num)", () => {
  beforeEach(() => {
    highLow.curNumOfGuesses = 0;
    highLow.targetNumber = 50;
  });

  test("the curNumOfGuesses increases after each guess", () => {
    let i;
    for (i = 1; i < 10; i++) {
      highLow.guess(0);
      expect(highLow.curNumOfGuesses).toBe(i);
    }
  });

  test("when num is below targetNumber, the number -1 is returned", () => {
    expect(highLow.guess(1)).toBe(-1);
    expect(highLow.guess(10)).toBe(-1);
    expect(highLow.guess(49)).toBe(-1);
  });

  test("when num is above targetNumber, the number 1 is returned", () => {
    expect(highLow.guess(99)).toBe(1);
    expect(highLow.guess(90)).toBe(1);
    expect(highLow.guess(51)).toBe(1);
  });

  test("when num is equals targetNumber, the number 0 is returned", () => {
    expect(highLow.guess(50)).toBe(0);
  });
});

describe("isOutOfGuesses()", () => {
  test("if curNumOfGuesses is less than maxNumOfGuesses", () => {
    highLow.curNumOfGuesses = 5;
    highLow.maxNumOfGuesses = 10;
    expect(highLow.isOutOfGuesses()).toBeFalsy();
  });

  test("if curNumOfGuesses is greater than maxNumOfGuesses", () => {
    highLow.curNumOfGuesses = 10;
    highLow.maxNumOfGuesses = 5;
    expect(highLow.isOutOfGuesses()).toBeTruthy();
  });

  test("if curNumOfGuesses is equal to maxNumOfGuesses", () => {
    highLow.curNumOfGuesses = 10;
    highLow.maxNumOfGuesses = 5;
    expect(highLow.isOutOfGuesses()).toBeTruthy();
  });
});
