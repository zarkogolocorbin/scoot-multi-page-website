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

import { motion } from "framer-motion";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};
Header.Links = function HeaderLinks({ children }) {
  return <Links>{children}</Links>;
};
Header.Link = function HeaderLink({ children, ...restProps }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <NavLink {...restProps}>{children}</NavLink>
    </motion.div>
  );
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Header.Button = function HeaderButton({ children }) {
  return (
    <motion.div
      style={{ marginLeft: "auto" }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Button>{children}</Button>
    </motion.div>
  );
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
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <HeroButton>{children}</HeroButton>
    </motion.div>
  );
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
