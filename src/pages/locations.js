import React, { useContext } from "react";
import { Context } from "../context/Context";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import Location from "../components/Location";
import { Helmet } from "react-helmet";

const Locations = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Scoot multi page website | Locations Page</title>
        <meta
          name="description"
          content="scoot multi page website locations page "
        />
      </Helmet>
      <Header>
        <Header.Nav>
          <Header.HamburgerMenu
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            src={
              isSidebarOpen
                ? "/assets/icons/close.svg"
                : "/assets/icons/hamburger.svg"
            }
            alt="hamburger-bars"
          />
          <Header.Logo
            src="/assets/logo.svg"
            alt="logo img"
            onClick={() => navigate("/")}
          />
          <Header.Links>
            <Header.Link to="/about">About</Header.Link>
            <Header.Link to="/locations">Locations</Header.Link>
            <Header.Link to="/careers">Careers</Header.Link>
          </Header.Links>
          <Header.Button>Get Scootin</Header.Button>
        </Header.Nav>
        <Header.CareersLocationsHero>
          <Header.HeroTitle>Locations</Header.HeroTitle>
        </Header.CareersLocationsHero>
        <Sidebar close={isSidebarOpen}>
          <Sidebar.Links close={isSidebarOpen}>
            <Sidebar.Link to="/about">About</Sidebar.Link>
            <Sidebar.Link to="/locations">Locations</Sidebar.Link>
            <Sidebar.Link to="/careers">Careers</Sidebar.Link>
            <Sidebar.Button>Get Scootin</Sidebar.Button>
          </Sidebar.Links>
        </Sidebar>
      </Header>
      <Main>
        <Location>
          <Location.Hero>
            <picture>
              <source
                srcSet={"/assets/images/world-map-desktop.jpg"}
                type="image/jpg"
                media="(min-width: 768px)"
              />
              <img
                src={"/assets/images/world-map-mobile.png"}
                alt="about img"
              />
            </picture>
          </Location.Hero>
          <Location.City>
            <Location.Item>New York</Location.Item>
            <Location.Item>London</Location.Item>
            <Location.Item>Yokohama</Location.Item>
            <Location.Item>Jakarta</Location.Item>
          </Location.City>
          <Location.Content>
            <Location.Title>Your city not listed?</Location.Title>
            <Location.Text>
              If you’d like to see Scoot in your hometown, be sure to let us
              know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </Location.Text>
            <Location.Button>Message Us</Location.Button>
          </Location.Content>
        </Location>
      </Main>
      <SignUp>
        <SignUp.Wrapper>
          <SignUp.Title>Sign up and Scoot off today</SignUp.Title>
          <SignUp.Images>
            <SignUp.Image
              src="/assets/icons/google-play.svg"
              alt="google play"
            />
            <SignUp.Image src="/assets/icons/app-store.svg" alt="app store" />
            <SignUp.Image />
          </SignUp.Images>
        </SignUp.Wrapper>
      </SignUp>
      <Footer>
        <Footer.Wrapper>
          <Footer.Logo
            src="/assets/logo.svg"
            alt="logo img"
            onClick={() => navigate("/")}
          />
          <Footer.Links>
            <Footer.Link to={"/about"}>About</Footer.Link>
            <Footer.Link to={"/locations"}>Location</Footer.Link>
            <Footer.Link to={"/careers"}>Careers</Footer.Link>
          </Footer.Links>
          <Footer.Icons>
            <Footer.Icon
              src={"/assets/icons/facebook.svg"}
              alt="facebook-icon"
            />
            <Footer.Icon
              src={"/assets/icons/instagram.svg"}
              alt="instagram-icon"
            />
            <Footer.Icon src={"/assets/icons/twitter.svg"} alt="twitter-icon" />
          </Footer.Icons>
        </Footer.Wrapper>
      </Footer>
    </>
  );
};

export default Locations;
