/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import * as S from './styles';

const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useState(document.body.className);
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    setTheme(document.body.className);
  }, []);

  const onChange = () => {
    const isDark = !isDarkMode;
    setIsDarkMode(isDark);
    document.body.className = isDark ? 'dark' : 'light';
  };
  return (
    <S.LightButton
      title={!isDarkMode ? `Apagar a luz` : `Acender a luz`}
      onClick={onChange}
    >
      {isDarkMode ? <S.LightButtonIconSun /> : <S.LightButtonIconMoon />}
    </S.LightButton>
  );
};

export default ThemeButton;
