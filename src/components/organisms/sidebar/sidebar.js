import {
  SidebarWrapper,
  ItemList,
} from 'components/organisms/sidebar/sidebar.styles';
import Item from 'components/organisms/sidebar/item/item';
import { itemNamesTab } from './sidebar-helpers';
import Logo from 'components/atoms/logo/logo';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo />
      <ItemList>
        {itemNamesTab.map((item) => (
          <Item name={item} key={item}></Item>
        ))}
      </ItemList>
    </SidebarWrapper>
  );
};
export default Sidebar;
