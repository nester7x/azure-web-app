import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #333333;
  padding: 5px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #81c4ff;
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: #ff3523;
`;
