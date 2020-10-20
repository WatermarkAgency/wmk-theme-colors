const ColorPalette = require("./");
const colors = [
  { name: "curious", value: "#25a2d8", group: "blue" },
  { name: "white", value: "#fefefe", group: "white", reverse: true },
  { name: "black", value: "#0a0a0a", group: "black", text: true },
  { name: "saffron", value: "#F7D43F", group: "yellow", accent: true },
  { name: "matisse", value: "#197FAA", group: "blue" },
  { name: "denim", valu: "#1585C7", group: "blue", primary: true },
  { name: "blizzard", value: "#A7D6F0", group: "blue" },
  { name: "sail", value: "#a9ddfa", group: "blue", secondary: true },
  { name: "nile", value: "#194E50", group: "green" },
  { name: "genoa", value: "#0F6C68", group: "green" },
  { name: "elephant", value: "#0D393B", group: "green" },
  { name: "juniper", value: "#6b9596", group: "green" },
  { name: "hummingBird", value: "#D3EBF8", group: "blue" },
  { name: "whiteIce", value: "#EDF7FC", group: "blue" },
  { name: "porsche", value: "#E59B5C", group: "orange" },
];

const theme = new ColorPalette(colors);

test("Displays a valid named color as CSS Hex code", () => {
  expect(theme.hex("whiteIce")).toBe("#EDF7FC");
});

test("Displays a valid named color as CSS RGB string", () => {
  expect(theme.rgb("saffron")).toBe("rgb(247, 212, 63)");
});

test("Displays valid named color as CSS RGBA String", () => {
  expect(theme.rgba("genoa", 0.5)).toBe("rgba(15, 108, 104, 0.5)");
  expect(theme.rgba("hummingBird")).toBe("rgba(211, 235, 248, 1)");
});

test("Sets correct primary", () => {
  const pri = theme.primary();
  const org = theme.colors.denim;
  expect(pri.color.hex()).toBe(org.color.hex());
});

test("Sets correct secondary", () => {
  const pri = theme.secondary();
  const org = theme.colors.sail;
  expect(pri.color.hex()).toBe(org.color.hex());
});

test("Sets correct accent", () => {
  const pri = theme.accent();
  const org = theme.colors.saffron;
  expect(pri.color.hex()).toBe(org.color.hex());
});

test("Sets correct text", () => {
  const pri = theme.text();
  const org = theme.colors.black;
  expect(pri.color.hex()).toBe(org.color.hex());
});

test("Sets correct reverse", () => {
  const pri = theme.reverse();
  const org = theme.colors.white;
  expect(pri.color.hex()).toBe(org.color.hex());
});
