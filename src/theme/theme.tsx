// theme.ts
export interface ColorPalette {
    primary: string;
    primaryRgb: string;
    primaryContrast: string;
    primaryContrastRgb: string;
    primaryShade: string;
    primaryTint: string;
  }
  
  export const defaultPalette: ColorPalette = {
    primary: '#3880ff',
    primaryRgb: '56, 128, 255',
    primaryContrast: '#ffffff',
    primaryContrastRgb: '255, 255, 255',
    primaryShade: '#3171e0',
    primaryTint: '#4c8dff'
  };