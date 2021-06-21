import Nav from 'components/organisms/nav/nav';
import { MainWrapper } from './mainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <MainWrapper>
      <Nav />
      {children}
    </MainWrapper>
  );
};
export default MainTemplate;
