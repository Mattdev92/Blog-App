import React from 'react';
import { ButtonWrapper } from 'components/atoms/button/button.styles';
import { ButtonTypes } from 'components/atoms/button/button.types';

const Button: React.FC<ButtonTypes> = ({ onClick }) => (
  <ButtonWrapper onClick={onClick}>Redux toolkit example</ButtonWrapper>
);
export default Button;
