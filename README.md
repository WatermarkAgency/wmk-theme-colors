# wmk-color-palette


Create a color palatte by passing an array of objects:
```js
const colors = [
  { name: "curious", value: "#25a2d8", group: "blue" },
  { name: "white", value: "#fefefe", group: "white", reverse: true },
  { name: "black", value: "#0a0a0a", group: "black", text: true },
  { name: "saffron", value: "#F7D43F", group: "yellow", accent: true },
  { name: "matisse", value: "#197FAA", group: "blue" },
  { name: "denim", value: "#1585C7", group: "blue", primary: true },
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
```
