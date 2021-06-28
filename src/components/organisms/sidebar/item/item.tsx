import React from 'react';
import { Title } from 'components/organisms/sidebar/item/item.styles';
import { ItemTypes } from './item.types';
const Item: React.FC<ItemTypes> = ({ name }) => {
  return (
    <Title to={`/${name}`} key={name}>
      {name}
    </Title>
  );
};
export default Item;
