const validator = require("./phone-number-validator");

const required = [
  { number: null, expected: validator.messages.required },
  { number: "", expected: validator.messages.required },
  { number: "   ", expected: validator.messages.required },
];

const format = [
  { number: "644-7821", expected: validator.messages.format },
  { number: "1-208-737-4055", expected: validator.messages.format },
  { number: "215-543-901-9999", expected: validator.messages.format },
  { number: "417-6218626", expected: validator.messages.format },
  { number: "4344549227", expected: validator.messages.format },
  { number: "229-421-2176-", expected: validator.messages.format },
  { number: "-339-2569-1230", expected: validator.messages.format },
  { number: "+1 623 312 8640", expected: validator.messages.format },
  { number: "239.908.9467", expected: validator.messages.format },
  { number: "(805) 581-2382", expected: validator.messages.format },
  { number: "805-581-2382", expected: null },
  { number: "800-567-5309", expected: null },
  { number: "345-333-3333", expected: null },
  { number: "999-999-9999", expected: null },
  { number: "808-808-8080", expected: null },
];

const area_code = [
  { number: "162-506-1380", expected: validator.messages.areaCode },
  { number: "017-857-3396", expected: validator.messages.areaCode },
  { number: "24-222-9037", expected: validator.messages.areaCode },
  { number: "1-934-9592", expected: validator.messages.areaCode },
  { number: "8010-469-3893", expected: validator.messages.areaCode },
  { number: "abc-469-3893", expected: validator.messages.areaCode },
  { number: "+-469-3893", expected: validator.messages.areaCode },
  { number: "a-469-3893", expected: validator.messages.areaCode },
  { number: "222-469-3893", expected: null },
  { number: "200-469-3893", expected: null },
  { number: "999-469-3893", expected: null },
  { number: "456-469-3893", expected: null },
  { number: "666-469-3893", expected: null },
  { number: "989-469-3893", expected: null },
];
const subscriber = [
  //invalid
  { number: "234-026-1380", expected: validator.messages.subscriber },
  { number: "517-157-3396", expected: validator.messages.subscriber },
  { number: "464-22-9037", expected: validator.messages.subscriber },
  { number: "417-9342-9592", expected: validator.messages.subscriber },
  { number: "801-4-3893", expected: validator.messages.subscriber },
  { number: "801-abc-3893", expected: validator.messages.subscriber },
  { number: "801-:::-3893", expected: validator.messages.subscriber },
  //valid
  { number: "234-326-1380", expected: null },
  { number: "517-200-3396", expected: null },
  { number: "464-999-9037", expected: null },
  { number: "417-777-9592", expected: null },
  { number: "801-222-3893", expected: null },
  { number: "801-234-3893", expected: null },
];

const suffix = [
  //invalid
  { number: "234-626-138", expected: validator.messages.suffix },
  { number: "234-626-13", expected: validator.messages.suffix },
  { number: "234-626-1", expected: validator.messages.suffix },
  { number: "234-626-abcd", expected: validator.messages.suffix },
  { number: "234-626-****", expected: validator.messages.suffix },
  { number: "234-626-138", expected: validator.messages.suffix },
  //valid
  { number: "234-626-1300", expected: null },
  { number: "234-626-0000", expected: null },
  { number: "234-626-0001", expected: null },
  { number: "234-555-5555", expected: null },
  { number: "234-626-9999", expected: null },
  { number: "234-626-1234", expected: null },
];

describe("validate(input)", () => {
  test.each(suffix.filter((i) => i.expected))("Invalid suffix %o", (suffix) => {
    expect(validator.validate(suffix.number).phoneNumber).toBe(suffix.expected);
  });
  test.each(suffix.filter((i) => !i.expected))("Valid suffix %o", (suffix) => {
    expect(validator.validate(suffix.number).phoneNumber).toBeFalsy();
  });
  test.each(subscriber.filter((i) => i.expected))(
    "Invalid subscriber %o",
    (subscriber) => {
      expect(validator.validate(subscriber.number).phoneNumber).toBe(
        subscriber.expected
      );
    }
  );
  test.each(subscriber.filter((i) => !i.expected))(
    "Valid subscriber %o",
    (subscriber) => {
      expect(validator.validate(subscriber.number).phoneNumber).toBeFalsy();
    }
  );
  test.each(area_code.filter((i) => i.expected))(
    "Invalid area code %o",
    (area_code) => {
      expect(validator.validate(area_code.number).phoneNumber).toBe(
        area_code.expected
      );
    }
  );
  test.each(area_code.filter((i) => !i.expected))(
    "Valid area code %o",
    (area_code) => {
      expect(validator.validate(area_code.number).phoneNumber).toBeFalsy();
    }
  );
  test.each(format.filter((i) => i.expected))("Invalid format %o", (format) => {
    expect(validator.validate(format.number).phoneNumber).toBe(format.expected);
  });
  test.each(format.filter((i) => !i.expected))("Valid format %o", (format) => {
    expect(validator.validate(format.number).phoneNumber).toBeFalsy();
  });

  test.each(required.filter((i) => i.expected))(
    "Input required %o",
    (required) => {
      expect(validator.validate(required.number).phoneNumber).toBe(
        required.expected
      );
    }
  );
});
