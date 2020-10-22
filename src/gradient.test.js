const { Gradient } = require("./gradient");
const { test, expect } = require("@jest/globals");

test("returns css string with fallback for gradient", () => {
  const WMKGradient = new Gradient([["#E48C2B"], ["#ffd500"], ["#F15A24"]]);
  expect(
    WMKGradient.grad().indexOf("background: rgb(228, 140, 43);")
  ).toBeGreaterThanOrEqual(0);
  expect(
    WMKGradient.grad().indexOf(
      `background: linear-gradient(180deg, rgba(228, 140, 43, 1) 0%, rgba(255, 213, 0, 1) 50%, rgba(241, 90, 36, 1) 100%);`
    )
  ).toBeGreaterThan(0);
});
