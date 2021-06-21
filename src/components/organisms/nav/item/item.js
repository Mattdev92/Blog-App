import { Title } from 'components/organisms/nav/item/item.styles';

const Item = ({ name }) => {
  return (
    <Title to={`/${name}`} key={name}>
      {name}
    </Title>
  );
};
export default Item;
