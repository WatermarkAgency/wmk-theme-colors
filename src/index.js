import Color from "color";
import get from "lodash/get";

export default class ColorPalette {
  constructor(colors) {
    this.colors = this._setColors(colors);
  }
  // returns a shade or tint of given named color
  getHover(name, amount) {
    const baseColor = this.getColor(name);
    const amt = amount ? amount : 0.2;
    if (!baseColor) {
      return undefined;
    } else {
      if (baseColor.isLight()) {
        return new Color(baseColor.darken(amt));
      } else {
        return new Color(baseColor.lighten(amt));
      }
    }
  }
  hover(name, amount) {
    const hover = this.getHover(name, amount);
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
  text() {
    return get(this.colors, `text`);
  }
  reverse() {
    return get(this.colors, `reverse`);
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
  _setColors(colArr) {
    const mappedColors = colArr.map((col) => {
      const { name, value, group } = col;
      const primary = get(col, "primary", false);
      const secondary = get(col, "secondary", false);
      const accent = get(col, "accent", false);
      const text = get(col, "text", false);
      const reverse = get(col, "reverse", false);
      return {
        name,
        group,
        color: new Color(value),
        primary,
        secondary,
        accent,
        text,
        reverse,
      };
    });
    const reduced = {};
    mappedColors.reduce((a, b) => {
      const ret = { name: b.name, group: b.group, color: b.color };
      if (b.primary) {
        reduced.primary = ret;
      }
      if (b.secondary) {
        reduced.secondary = ret;
      }
      if (b.text) {
        reduced.text = ret;
      }
      if (b.reverse) {
        reduced.reverse = ret;
      }
      if (b.accent) {
        reduced.accent = ret;
      }
      reduced[b.name] = ret;
    });
    return reduced;
  }
}
