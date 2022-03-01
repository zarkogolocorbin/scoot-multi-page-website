import {
  Container,
  Title,
  Cards,
  Card,
  CardTitle,
  Text,
  Image,
  Number,
} from "./style/Features";

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Title = function FeaturesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.Cards = function FeaturesCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};
Features.Card = function FeaturesCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
Features.CardTitle = function FeaturesCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};
Features.Text = function FeaturesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Features.Image = function FeaturesImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Features.Number = function FeaturesNumber({ children, ...restProps }) {
  return <Number {...restProps}>{children}</Number>;
};
