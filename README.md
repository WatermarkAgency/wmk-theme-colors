# wmk-color-palette


Create a color palatte by passing an array of objects. Colors passed without names will inherit names from NameThatColor.
```js
const colors = [
  // Primary Color
  { value: "#FA8D39", group: "orange", primary: true },
  // Secondary Color
  { value: "#FF9E54", group: "orange", secondary: true },
  // Tertiary Color
  { value: "#B39985", group: "brown", tertiary: true },
  // Accent Color
  { value: "#059AAD", group: "blue", accent: true },
  // Co-Accent Color
  { value: "#39E4FA", group: "blue", coaccent: true },
  // Global Black Color
  { value: "#3a3a3a", group: "black", black: true },
  // Global Text Color
  { value: "#4c4c4c", group: "gray", text: true },
  // Global White Color
  { value: "#fcfcfc", group: "white", reverse: true },
];
const theme = new ColorPalette(colors);
```

## Methods

#### hover(name, amount)

Given a color name, will return a color lighter or darker
to a specified amount. Default value is 0.2
```js
    return '#HEX_STRING'
```

### Get global aliases as Color class objects

These functions will return a Color object (made from npm color), so any of the methods of the class are available.
#### primary()

```js
    return Color();
```
#### secondary()

```js
    return Color();
```
#### tertiary()

```js
    return Color();
```
#### accent()

```js
    return Color();
```
#### coaccent()

```js
    return Color();
```
#### text()

```js
    return Color();
```

#### getColor(name)
```js
    return Color();
```

### Get CSS-ready strings

#### hex(name)

```js
    return '#HEX_STRING'
```

#### rgb(name)

```js
    return 'rgb(string)'
```

#### rgba(name)
```js
    return 'rgba(string,alpha)'
```