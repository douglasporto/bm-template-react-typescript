import styled from 'styled-components';
import BackgroundImg from '../../assets/login-project-manager.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
  img {
    width: 300px;
  }
  form {
    margin: 80px;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;
