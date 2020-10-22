import get from "lodash/get";
import Color from "color";
import { getColorName } from "./nameThatColor";

export class ColorPalette {
  constructor(colors) {
    this.colors = this._setColors(colors);
  }
  // returns a shade or tint of given named color
  getHover(name, amount, flip) {
    const baseColor = this.getColor(name);
    const amt = amount ? amount : 0.2;
    const isFlip = flip ? true : false;
    if (!baseColor) {
      return undefined;
    } else {
      if (baseColor.isLight()) {
        return isFlip
          ? new Color(baseColor.lighten(amt))
          : new Color(baseColor.darken(amt));
      } else {
        return isFlip
          ? new Color(baseColor.darken(amt))
          : new Color(baseColor.lighten(amt));
      }
    }
  }
  hover(name, amount, flip) {
    const hover = this.getHover(name, amount, flip);
    return hover.hex();
  }
  primary() {
    return get(this.colors, `primary`);
  }
  secondary() {
    return get(this.colors, `secondary`);
  }
  accent() {
    return get(this.colors, `accent`);
  }
  coaccent() {
    return get(this.colors, `coaccent`);
  }
  text() {
    return get(this.colors, `text`);
  }
  reverse() {
    return get(this.colors, `reverse`);
  }
  tertiary() {
    return get(this.colors, `tertiary`);
  }
  hex(name) {
    const color = this.getColor(name);
    return color ? color.hex() : undefined;
  }
  rgb(name) {
    const color = this.getColor(name);
    return color ? color.rgb().string() : undefined;
  }
  rgba(name, amount) {
    const color = this.getColor(name);
    const amt = amount ? amount : get(color, `valpha`, 0.5);
    const str = color.rgb().string().split("");
    str.splice(3, 0, "a");
    str.splice(str.length - 1, 0, ", " + amt);
    return str.join("");
  }
  getColor(name) {
    return get(this.colors, `${name}.color`);
  }
  colorize(value) {
    return new Color(value);
  }
  _setColors(colArr) {
    const mappedColors = colArr.map((col) => {
      const { value, group } = col;
      const name = get(col, "name", getColorName(value));
      const primary = get(col, "primary", false);
      const secondary = get(col, "secondary", false);
      const accent = get(col, "accent", false);
      const text = get(col, "text", false);
      const reverse = get(col, "reverse", false);
      const tertiary = get(col, "tertiary", false);
      const black = get(col, "black", false);
      const coaccent = get(col, "coaccent", false);
      return {
        name,
        group,
        color: new Color(value),
        primary,
        secondary,
        accent,
        text,
        reverse,
        tertiary,
        black,
        coaccent,
      };
    });
    return mappedColors.reduce((total, amount) => {
      const ret = {
        name: amount.name,
        group: amount.group,
        color: amount.color,
      };
      if (amount.primary) {
        total.primary = ret;
      }
      if (amount.secondary) {
        total.secondary = ret;
      }
      if (amount.text) {
        total.text = ret;
      }
      if (amount.black) {
        total.black = ret;
      }
      if (amount.reverse) {
        total.reverse = ret;
        total.white = ret;
      }
      if (amount.accent) {
        total.accent = ret;
      }
      if (amount.tertiary) {
        total.tertiary = ret;
      }
      if (amount.coaccent) {
        total.coaccent = ret;
      }
      total[amount.name] = ret;
      return total;
    }, {});
  }
}
