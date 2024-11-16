// ThemeProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ColorPalette, defaultPalette } from './theme';

interface ThemeContextType {
  colors: ColorPalette;
  updateColors: (newColors: Partial<ColorPalette>) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colors: defaultPalette,
  updateColors: () => {}
});

interface ThemeProviderProps {
  children: ReactNode;
  initialColors?: Partial<ColorPalette>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialColors 
}) => {
  const [colors, setColors] = useState<ColorPalette>({
    ...defaultPalette,
    ...initialColors
  });

  const updateColors = (newColors: Partial<ColorPalette>) => {
    const updatedColors = { ...colors, ...newColors };
    setColors(updatedColors);
    
    // Update CSS variables
    Object.entries(updatedColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--ion-color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
        value
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);