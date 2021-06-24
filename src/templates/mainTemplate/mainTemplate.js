import Sidebar from 'components/organisms/sidebar/sidebar';
import { MainWrapper } from './mainTemplate.styles';
import Nav from 'components/organisms/nav/nav';
import MainSection from 'components/organisms/mainSection/mainSection';
import Footer from 'components/organisms/footer/footer';

const MainTemplate = ({ children }) => {
  return (
    <MainWrapper>
      <Sidebar />
      <Nav />
      <MainSection>{children}</MainSection>
      <Footer />
    </MainWrapper>
  );
};
export default MainTemplate;
