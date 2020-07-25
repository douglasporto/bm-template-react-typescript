import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Container = styled.div``;
export const Header = styled.div``;
export const HeaderContent = styled.div``;

export const CardGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const DatePickerContainer = styled(DatePicker)`
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        display: none !important;
        color: var(--bgInputTxt);
        flex: 1;
        border: 0;
        background: transparent !important;
        &::placeholder {
          color: #666360;
        }
      }
    }
  }
`;
