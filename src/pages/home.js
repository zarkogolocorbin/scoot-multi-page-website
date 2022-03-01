import React, { useContext } from "react";
import { Context } from "../context/Context";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import Main from "../components/Main";
import Description from "../components/Description";
import { Helmet } from "react-helmet";
import { Article, Section } from "../components/Section";
import { homeDb } from "../db/homeDB";
import { descriptionDb } from "../db/descriptionDB";

const Home = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Context);
  return (
    <>
      <Helmet>
        <title>Scoot multi page website</title>
        <meta name="description" content="Easy scooter rental in the city" />
        <meta
          name="keywords"
          content="scoot, scooter rental,zero hassle payments"
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
          <Header.Logo src="/assets/logo.svg" alt="logo img" />
          <Header.Links>
            <Header.Link to="/about">About</Header.Link>
            <Header.Link to="/locations">Locations</Header.Link>
            <Header.Link to="/careers">Careers</Header.Link>
          </Header.Links>
          <Header.Button>Get Scootin</Header.Button>
        </Header.Nav>
        <Header.Hero>
          <Header.HeroTitle>Scooter sharing made simple</Header.HeroTitle>
          <Header.HeroText>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </Header.HeroText>
          <Header.HeroButton>Get Scootin</Header.HeroButton>
        </Header.Hero>
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
        <Description>
          <Description.Cards>
            {descriptionDb.map((desc) => {
              return (
                <Description.Card>
                  <Description.Image
                    src={`/assets/icons/${desc.imgURL}`}
                    alt={desc.title}
                  />
                  <Description.Content>
                    <Description.Title>{desc.title}</Description.Title>
                    <Description.Text>{desc.text}</Description.Text>
                  </Description.Content>
                </Description.Card>
              );
            })}
          </Description.Cards>
        </Description>
        <Section>
          {homeDb.map((home) => {
            return (
              <Article revers={home.revers}>
                <Article.Content>
                  <Article.Title>{home.title}</Article.Title>
                  <Article.Text>{home.text}</Article.Text>
                  <Article.Button>Learn more</Article.Button>
                </Article.Content>
                <Article.Image
                  revers={home.revers}
                  src={`/assets/images/${home.img}`}
                  alt={home.img}
                />
              </Article>
            );
          })}
        </Section>
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
          <Footer.Logo src="/assets/logo.svg" alt="logo img" />
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

export default Home;
