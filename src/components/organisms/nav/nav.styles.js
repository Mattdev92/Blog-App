import styled from 'styled-components';

export const NavWrapper = styled.nav`
  margin: 0;
  padding: 0;
  display: inline-flex;
  width: calc(100vw - 200px);
  height: 30px;
  justify-content: flex-end;
  align-items: center;
  grid-area: nav;
`;
export const ListWrapper = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0 30px;
  cursor: pointer;
`;
