import {
  Container,
  Hero,
  Content,
  Title,
  Text,
  Button,
  City,
  Item,
} from "./style/Location";

export default function Location({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Location.Hero = function LocationHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};
Location.Content = function LocationContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Location.Title = function LocationTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Location.Text = function LocationText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Location.Button = function LocationButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Location.City = function LocationCity({ children, ...restProps }) {
  return <City {...restProps}>{children}</City>;
};
Location.Item = function LocationItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
