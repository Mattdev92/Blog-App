import {
  NavWrapper,
  ListWrapper,
  ListItem,
} from 'components/organisms/nav/nav.styles';
import { icons } from 'components/organisms/nav/nav.helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <NavWrapper>
      <ListWrapper>
        {icons.map((item, i) => {
          return (
            <ListItem>
              <FontAwesomeIcon icon={item} key={i} />
            </ListItem>
          );
        })}
      </ListWrapper>
    </NavWrapper>
  );
};
export default Nav;
