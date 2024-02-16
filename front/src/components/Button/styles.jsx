import styled from 'styled-components';

export const BtnStyled = styled.button`
  color: #ffffff;
  background-color: #51c87b;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
