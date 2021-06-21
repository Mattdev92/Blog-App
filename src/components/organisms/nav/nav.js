import { NavWrapper, ItemList } from 'components/organisms/nav/nav.styles';
import Item from 'components/organisms/nav/item/item';
import { itemNamesTab } from './nav-helpers';

const Nav = () => {
  return (
    <NavWrapper>
      <ItemList>
        {itemNamesTab.map((item) => (
          <Item name={item}></Item>
        ))}
      </ItemList>
    </NavWrapper>
  );
};
export default Nav;
