import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ onClick, type = 'button', text, disabled = false, ...rest }) => (
  <S.BtnStyled {...rest} onClick={onClick} type={type} disabled={disabled}>
    {text}
  </S.BtnStyled>
);

Button.prototype = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
