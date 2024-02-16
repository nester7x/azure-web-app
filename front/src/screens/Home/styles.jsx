import styled from 'styled-components';

import Input from 'src/components/Input';
import Button from 'src/components/Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 #333333;
  border-radius: 7px;
  padding: 30px;
  color: #333333;
  max-width: 313px;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 28px;
  margin: 0 0 10px;
  text-align: center;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
`;
export const Label = styled.label`
  margin: 0 0 5px;
`;
export const FileInput = styled.input.attrs({ type: 'file' })``;

export const FormInput = styled(Input)``;

export const SubmitBtn = styled(Button)``;
