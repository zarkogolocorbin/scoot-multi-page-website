import {
  Container,
  Nav,
  Links,
  NavLink,
  Logo,
  Button,
  HamburgerMenu,
  Hero,
  HeroTitle,
  HeroText,
  HeroButton,
  AboutHero,
  CareersLocationsHero,
} from "./style/header";

export default function Header({ children }) {
  return <Container>{children}</Container>;
}

Header.Nav = function HeaderNav({ children }) {
  return <Nav>{children}</Nav>;
};
Header.Links = function HeaderLinks({ children }) {
  return <Links>{children}</Links>;
};
Header.Link = function HeaderLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Header.Button = function HeaderButton({ children }) {
  return <Button>{children}</Button>;
};

Header.HamburgerMenu = function HeaderHamburgerMenu({ ...restProps }) {
  return <HamburgerMenu {...restProps} />;
};

Header.Hero = function HeaderHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};
Header.HeroTitle = function HeaderHeroTitle({ children, ...restProps }) {
  return <HeroTitle {...restProps}>{children}</HeroTitle>;
};
Header.HeroText = function HeaderHeroText({ children, ...restProps }) {
  return <HeroText {...restProps}>{children}</HeroText>;
};
Header.HeroButton = function HeaderHeroButton({ children, ...restProps }) {
  return <HeroButton {...restProps}>{children}</HeroButton>;
};

Header.AboutHero = function HeaderAboutHero({ children, ...restProps }) {
  return <AboutHero {...restProps}>{children}</AboutHero>;
};
Header.CareersLocationsHero = function HeaderCareersLocationsHero({
  children,
  ...restProps
}) {
  return <CareersLocationsHero {...restProps}>{children}</CareersLocationsHero>;
};
