import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  // common style
  background-color: ${(props) => props.theme.main};
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 800;
  cursor: pointer;

  // custom style
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
`;

const BaseButton = (props) => <StyledButton {...props} />;

export default BaseButton;
