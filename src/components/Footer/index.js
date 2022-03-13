import { motion } from "framer-motion";
import {
  Container,
  Links,
  FooterLink,
  Logo,
  Icons,
  Icon,
  Wrapper,
} from "./style/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Logo = function FooterLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Footer.Links = function FooterLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Footer.Link = function Link({ children, ...restProps }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <FooterLink {...restProps}>{children}</FooterLink>
    </motion.div>
  );
};

Footer.Icons = function FooterIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Footer.Icon = function FooterIcon({ children, ...restProps }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <Icon {...restProps} />
    </motion.div>
  );
};
