import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { LogoWrapper } from 'components/atoms/logo/logo.styles';

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <FontAwesomeIcon icon={faBlog} size="5x" />
    </LogoWrapper>
  );
};

export default Logo;
