const colors = {
  red: '#d32f2f',
  pink: '#c2185b',
  purple: '#7b1fa2',
  deepPurple: '#512da8',
  indigo: '#303f9f',
  blue: '#1976d2',
  lightBlue: '#0288d1',
  cyan: '#0097a7',
  teal: '#00796b',
  green: '#388e3c',
  lightGreen: '#689f38',

}

export default colors;

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

export function useDark(color) {
  const gamma = 2.2;
  const rgb = hexToRgb(color);
  const luminance = 0.2126 * Math.pow(rgb.r / 255, gamma)
    + 0.7152 * Math.pow(rgb.g / 255, gamma)
    + 0.0722 * Math.pow(rgb.b / 255, gamma);

  const dark = (luminance > Math.pow(0.5, gamma));
  return dark;
}
