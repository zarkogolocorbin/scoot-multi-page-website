import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const Nav = styled.nav`
  padding: 22px calc(10vw + 15px);

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 22px calc(10vw - 5.5px);
  }
`;

export const NavLink = styled(Link)`
  display: block;
  color: #939caa;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  text-decoration: none;

  &:hover {
    color: #fcb72b;
  }
`;

export const Links = styled.div`
  display: flex;
  column-gap: 32px;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 28px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
    width: 75px;
    height: 20px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  border: 1px solid #fff;
  outline: none;
  padding: 14px 40px;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  background: #fcb72b;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fcb72b;
    background: #fff;
    border-color: #fcb72b;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Hero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 153px calc(10vw + 15px);
  background: url("/assets/images/home-hero-desktop.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &::before {
    position: absolute;
    content: url("/assets/patterns/white-circles.svg");
    right: -4.8rem;
    bottom: 16.45rem;
  }

  @media screen and (max-width: 1080px) {
    padding-bottom: 20rem;
    align-items: center;
    text-align: center;
    &::before {
      right: -3.1rem;
      bottom: 4.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 13.7rem calc(10vw - 5.5px);
    &::before {
      content: "";
    }
  }
`;
export const HeroTitle = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 5.6rem;
  line-height: 56px;
  letter-spacing: -2.5px;
  max-width: 50rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    line-height: 40px;
    letter-spacing: -1.79px;
  }
`;
export const HeroText = styled.p`
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  line-height: 25px;
  max-width: 40.5rem;
  margin-left: 9rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: block;

  &::before {
    position: absolute;
    content: url("/assets/patterns/line.svg");
    right: 100%;
    top: 50%;
    margin-right: 5.7rem;
  }

  &::after {
    position: absolute;
    content: url("/assets/patterns/right-arrow.svg");
    left: 100%;
    top: 50%;
    margin-left: 4rem;
  }

  @media screen and (max-width: 1080px) {
    margin: 2.4rem 0 3.4rem 0;

    &::before {
      content: "";
    }
    &::after {
      position: absolute;
      content: url("/assets/patterns/right-arrow.svg");
      left: -110%;
      top: 135%;
      margin-left: 0;
    }
  }
`;
export const HeroButton = styled.button`
  border: 1px solid transparent;
  outline: none;
  padding: 14px 40px;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  background: #fcb72b;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fcb72b;
    background: transparent;
    border-color: #fcb72b;
  }
`;

export const AboutHero = styled.div`
  background: url("/assets/images/about-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 7.2rem calc(10vw + 21px);
  position: relative;
  &::before {
    position: absolute;
    content: url("/assets/patterns/white-circles.svg");
    top: 35%;
    right: -3.8rem;
  }

  @media screen and (max-width: 728px) {
    &::before {
      content: "";
    }
    text-align: center;
  }
`;
export const CareersLocationsHero = styled.div`
  background: url("/assets/images/careers-locations-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 7.2rem calc(10vw + 21px);
  position: relative;
  &::before {
    position: absolute;
    content: url("/assets/patterns/white-circles.svg");
    top: 35%;
    right: -3.8rem;
  }
  @media screen and (max-width: 728px) {
    &::before {
      content: "";
    }
    text-align: center;
  }
`;
