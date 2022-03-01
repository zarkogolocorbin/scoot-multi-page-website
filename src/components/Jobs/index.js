import {
  Container,
  Cards,
  Card,
  Content,
  Position,
  City,
  Button,
} from "./style/Jobs";

export default function Jobs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jobs.Cards = function sJobCard({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};
Jobs.Card = function JobCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
Jobs.Content = function JobContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Jobs.Position = function JobPosition({ children, ...restProps }) {
  return <Position {...restProps}>{children}</Position>;
};
Jobs.City = function JobCity({ children, ...restProps }) {
  return <City {...restProps}>{children}</City>;
};
Jobs.Button = function JobButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
