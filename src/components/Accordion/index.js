import React, { useState, useContext, createContext } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Title,
  SubTitle,
  Header,
  Body,
  Wrapper,
  Item,
  Frame,
} from "./style/Accordion";

const variants = {
  open: { opacity: 1, height: "auto" },
  close: { opacity: 0, height: 0 },
};

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Subtitle = function AccordionSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Accordion.Wrapper = function AccordionWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img
          src="/assets/icons/chevron.svg"
          alt="chevron"
          style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        />
      ) : (
        <img
          src="/assets/icons/chevron.svg"
          alt="chevron"
          style={{ cursor: "pointer" }}
        />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    toggleShow && (
      <motion.div
        style={{ overflow: "hidden" }}
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
      >
        <Body {...restProps}>{children}</Body>
      </motion.div>
    )
  );
};
