import styled from 'styled-components';

export const SidebarWrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 200px;
  height: calc(100vh - 30px);
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-right: 1px solid lightgrey;
  grid-area: aside;
`;
export const ItemList = styled.ul`
  height: auto;
  margin: 100px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
