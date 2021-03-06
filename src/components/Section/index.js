import React from "react";
import { motion } from "framer-motion";
import {
  SectionContainer,
  ArticleContainer,
  Content,
  Title,
  Text,
  Button,
  Image,
} from "./style/section";

export function Section({ children, ...resProps }) {
  return <SectionContainer {...resProps}>{children}</SectionContainer>;
}
export function Article({ children, ...resProps }) {
  return <ArticleContainer {...resProps}>{children}</ArticleContainer>;
}

Article.Content = function HomeContent({ children, ...resProps }) {
  return <Content {...resProps}>{children}</Content>;
};
Article.Title = function HomeTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Article.Text = function HomeText({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};
Article.Button = function HomeButton({ children, ...resProps }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
    >
      <Button {...resProps}>{children}</Button>
    </motion.div>
  );
};
Article.Image = function HomeImage({ children, ...resProps }) {
  return <Image {...resProps}>{children}</Image>;
};
