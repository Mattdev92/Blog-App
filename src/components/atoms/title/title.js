import { TitleWrapper } from 'components/atoms/title/title.styles';

const Title = ({ children, size }) => (
  <TitleWrapper size={size}>{children}</TitleWrapper>
);
export default Title;
