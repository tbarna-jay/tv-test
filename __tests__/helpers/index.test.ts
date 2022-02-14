import { stringifyParams } from "../../src/helpers/api";

describe("stringifyParams function", () => {
  it("should return the right values", () => {
    expect(
      stringifyParams({
        key: "value",
        otherKey: 123,
      })
    ).toBe("key=value&otherKey=123");
  });

  it("should return the right values for default params", () => {
    expect(
      stringifyParams({
        country: "GB",
        date: "2022-02-13",
      })
    ).toBe("country=GB&date=2022-02-13");
  });
});
