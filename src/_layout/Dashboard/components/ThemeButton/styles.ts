import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Color } from '../../../../styles/variables';

export const LightButton = styled.button`
  align-items: center;
  color: ${Color.themeColor};
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  &:focus {
    outline: transparent;
  }
`;

export const LightButtonIconSun = styled(FiSun)`
  display: block;
  font-size: 20px;
`;
export const LightButtonIconMoon = styled(FiMoon)`
  display: block;
  font-size: 20px;
`;
