import React from 'react';
import colors, { useDark } from './colors';

const ColorContext = React.createContext({ color: colors.blue, dark: useDark(colors.blue) });

export default ColorContext;
