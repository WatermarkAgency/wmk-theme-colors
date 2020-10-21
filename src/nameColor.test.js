const { test, expect } = require("@jest/globals");
const { NameThatColor, getColorName } = require("./nameThatColor");

test("gives expected named color", () => {
  const match = new NameThatColor("#5ABEF5");
  expect(match.name).toBe("malibu");
  expect(match.match).toBe("#7DC8F7");
  expect(getColorName("#5ABEF5")).toBe("malibu");
});
