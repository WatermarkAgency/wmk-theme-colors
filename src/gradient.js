import Color from "color";

export class Gradient {
  constructor(config, radial, degrees) {
    this.type = radial ? "radial" : "linear";
    this.length = config.length;
    this.gradient = this._setGradient(config);
    this.degrees = radial ? null : parseInt(degrees ? degrees : 180);
  }
  grad() {
    const cssArr = this.gradient.map((gradient) => {
      const color = gradient[0];
      const _stop = gradient[1];
      const rgb = color.rgb().string().split("");
      rgb.splice(rgb.length - 1, 0, ", " + color.valpha);
      rgb.splice(3, 0, "a");
      return rgb.join("") + " " + _stop + "%";
    });
    const cssString = cssArr.join(", ");
    return `background: ${this.gradient[0][0].rgb().string()};
background: ${this.type}-gradient(${this.degrees}deg, ${cssString});
          `;
  }
  _getStop(stop_, index) {
    if (stop_ || stop_ === 0) {
      return parseInt(stop_);
    }
    if (index === 0) {
      return 0;
    }
    if (index === this.length - 1) {
      return 100;
    }
    return (index / (this.length - 1)) * 100;
  }
  _setGradient(config) {
    const colors = [];
    if (!Array.isArray(config)) {
      return undefined;
    } else {
      const first = config[0];
      if (!Array.isArray(first)) {
        return undefined;
      } else {
        const firstColor = first[0];
        if (typeof firstColor === "string") {
          config.forEach((color, i) => {
            colors.push([new Color(color[0]), this._getStop(color[1], i)]);
          });
        } else {
          if (typeof color !== "object") {
            return undefined;
          }
          config.forEach((color, i) => {
            colors.push([color[0], this._getStop(color[1], i)]);
          });
        }
        return colors;
      }
    }
  }
}
