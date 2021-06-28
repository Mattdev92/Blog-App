import React from 'react';
import {
  NavWrapper,
  ListWrapper,
  ListItem,
} from 'components/organisms/nav/nav.styles';
import { icons } from 'components/organisms/nav/nav.helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <ListWrapper>
        {icons.map((item, i) => {
          return (
            <ListItem key={i}>
              <FontAwesomeIcon icon={item} />
            </ListItem>
          );
        })}
      </ListWrapper>
    </NavWrapper>
  );
};
export default Nav;
