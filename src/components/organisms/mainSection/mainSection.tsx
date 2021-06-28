import React from 'react';
import { MainWrapper } from 'components/organisms/mainSection/mainSection.styles';
import { MainSectionTypes } from './mainSection.types';

const MainSection: React.FC<MainSectionTypes> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};
export default MainSection;
