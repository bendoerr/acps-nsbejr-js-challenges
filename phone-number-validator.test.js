const validator = require("./phone-number-validator");

const invalid = [
  { number: "644-7821" },
  { number: "108-737-4055" },
  { number: "361-132-6709" },
  { number: "215-543-901" },
  { number: "417-6218626" },
  { number: "4344549227" },
  { number: "229-421-2176-" },
  { number: "574-339-2569-123" },
  { number: "+1 623-312-8640" },
  { number: "239.908.9467" },
  { number: "(805) 581-2382" },
];

const valid = [
  { number: "262-506-1380" },
  { number: "517-857-3396" },
  { number: "224-222-9037" },
  { number: "254-934-9592" },
  { number: "801-469-3893" },
  { number: "302-877-5399" },
  { number: "667-308-8784" },
  { number: "512-588-6371" },
  { number: "306-652-9695" },
  { number: "240-696-7362" },
  { number: "315-763-2724" },
  { number: "458-200-4885" },
  { number: "210-434-1060" },
  { number: "346-727-4876" },
  { number: "405-728-5890" },
  { number: "312-835-6108" },
  { number: "509-633-8817" },
  { number: "646-835-7054" },
  { number: "612-305-9833" },
  { number: "530-457-7501" },
];

describe("validate(input)", () => {
  test.each(invalid)("Invalid phone number %o", (invalid) => {
    expect(validator.validate(invalid.number)).toBe(false);
  });
  test.each(valid)("Valid phone number %o", (valid) => {
    expect(validator.validate(valid.number)).toBe(true);
  });
});
