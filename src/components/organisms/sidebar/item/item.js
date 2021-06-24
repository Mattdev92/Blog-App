import { Title } from 'components/organisms/sidebar/item/item.styles';

const Item = ({ name }) => {
  return (
    <Title to={`/${name}`} key={name}>
      {name}
    </Title>
  );
};
export default Item;
