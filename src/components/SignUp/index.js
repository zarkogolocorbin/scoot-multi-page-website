import { Container, Wrapper, Title, Images, Image } from "./style/sign-up";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp.Wrapper = function SignUpWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
SignUp.Title = function SignUpWrapper({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
SignUp.Images = function SignUpImages({ children, ...restProps }) {
  return <Images {...restProps}>{children}</Images>;
};
SignUp.Image = function SignUpImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
