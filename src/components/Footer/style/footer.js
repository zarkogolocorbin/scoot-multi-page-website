import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  background: #333a44;
`;

export const Wrapper = styled.footer`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  column-gap: 5.85rem;
  padding: 3.5rem calc(10vw + 21px);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 3.5rem calc(10vw - 12px);
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  filter: brightness(0) invert(1);
  @media screen and (max-width: 768px) {
    width: 10.8rem;
    height: 2.8rem;
  }
`;
export const Links = styled.div`
  display: flex;
  column-gap: 3.2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1.6rem;
    margin: 4rem 0 8rem 0;
  }
`;
export const FooterLink = styled(Link)`
  font-size: 1.5rem;
  line-height: 25px;
  color: #939caa;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fcb72b;
  }
`;

export const Icons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const Icon = styled.img`
  transition: all 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: brightness(0) invert(1);
  }
`;
