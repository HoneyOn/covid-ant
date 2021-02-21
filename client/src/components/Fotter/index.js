import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f7f7f7;
  border-top: 1px solid #dddddd;
  height: 15vh;
`;

const FooterContent = styled.div`
  padding: 32px 100px 0 100px;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.darkgray};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>경희대학교 오픈소스 SW 개발 프로젝트 </p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
