import React from 'react';
import { TitleWrapper } from 'components/atoms/title/title.styles';
import { TitleTypes } from './title.types';

const Title: React.FC<TitleTypes> = ({ children, size }) => (
  <TitleWrapper size={size}>{children}</TitleWrapper>
);
export default Title;
