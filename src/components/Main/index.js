import React from "react";
import { Container } from "./style/main";

export default function Main({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
