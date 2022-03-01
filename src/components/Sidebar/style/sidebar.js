import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 69px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ close }) => (close ? "1; z-index: 4;" : "0; z-index: -1;")};
`;
export const NavLink = styled(Link)`
  display: block;
  color: #fff;
  font-size: 1.8rem;
  line-height: 25px;
  font-family: "Space Mono", monospace;
  text-decoration: none;
  margin-bottom: 2.4rem;
  transition: all 0.2s ease;

  &:hover {
    color: #fcb72b;
  }
`;
export const Links = styled.div`
  width: 25.6rem;
  height: calc(100vh - 64px);
  background-color: #333a44;
  display: flex;
  flex-direction: column;
  transform: ${({ close }) => (close ? "translateX(0)" : "translateX(-100vw)")};
  transition: 0.5s;
  padding: 6.4rem 0 0 3.2rem;
`;
export const Button = styled.button`
  margin-top: auto;
  margin-bottom: 2.4rem;
  font-family: "Space Mono", monospace;
  font-size: 1.5rem;
  line-height: 25px;
  padding: 1.4rem 0;
  font-weight: 700;
  background-color: #fcb72b;
  width: 192px;
  color: #fff;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  &:hover {
    color: #fcb72b;
    background: #fff4df;
  }
`;
