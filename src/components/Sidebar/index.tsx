import React from 'react';
import {
  FiHome,
  FiMail,
  FiSettings,
  FiClipboard,
  FiLayers,
  FiMoon,
} from 'react-icons/fi';
import ThemeButton from '../../_layout/Dashboard/components/ThemeButton';
// import { shade } from 'polished';

// import { useTheme } from '../../../../hooks/theme';

import {
  Container,
  Navigation,
  NavigationItem,
  NavigationItemLink,
} from './styles';

import favicon from '../../assets/favicon.svg';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img src={favicon} alt="Favicon" />

      <Navigation>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/statistics">
            <FiHome size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/projects">
            <FiLayers size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/mails">
            <FiMail size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/tenders">
            <FiClipboard size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/settings">
            <FiSettings size={25} />
          </NavigationItemLink>
        </NavigationItem>
      </Navigation>
      <ThemeButton />
      {/* <FiMoon size={20} color="#7159c1" /> */}
    </Container>
  );
};

export default Sidebar;
