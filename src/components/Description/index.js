import {
  Container,
  Cards,
  Card,
  Image,
  Content,
  Title,
  Text,
} from "./style/Description";

export default function Description({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Description.Cards = function DescriptionCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};
Description.Cards = function DescriptionCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};
Description.Card = function DescriptionCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
Description.Image = function DescriptionImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Description.Content = function DescriptionContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Description.Title = function DescriptionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Description.Text = function DescriptionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
