import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired
};

export default Layout;
