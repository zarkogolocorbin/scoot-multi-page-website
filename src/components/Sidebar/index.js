import { Container, Links, NavLink, Button } from "./style/sidebar";

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sidebar.Links = function SidebarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};
Sidebar.Link = function SidebarLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Sidebar.Button = function SidebarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
