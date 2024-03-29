import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ name, type, onChange, value, placeholder, errorText, ...rest }) => {
  return (
    <>
      <S.StyledInput
        {...rest}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {errorText && <S.Error>{errorText}</S.Error>}
    </>
  );
};

Input.prototype = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errorText: PropTypes.string
};

export default Input;
