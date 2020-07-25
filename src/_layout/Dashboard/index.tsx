import React from 'react';

import dashboardBackground from '../../assets/dashboard-background.svg';
import Sidebar from '../../components/Sidebar';

import * as S from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <img src={dashboardBackground} alt="Dashboard Background" />

      <Sidebar />

      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
};

export default Dashboard;
