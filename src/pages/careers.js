import React, { useContext } from "react";
import { Context } from "../context/Context";
import Header from "../components/Header";
import Main from "../components/Main";
import { Section, Article } from "../components/Section";
import Features from "../components/Features";
import Sidebar from "../components/Sidebar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Jobs from "../components/Jobs";
import { Helmet } from "react-helmet";
import { featuresDb } from "../db/featuresDB";
import { jobsDb } from "../db/jobsDB";

const Careers = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Scoot multi page website | Careers Page</title>
        <meta
          name="description"
          content="scoot multi page website careers page "
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
          <Header.HeroTitle>Careers</Header.HeroTitle>
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
        <Section>
          <Article>
            <Article.Content>
              <Article.Title>Care to join our mission?</Article.Title>
              <Article.Text>
                We’re always looking for ambitious individuals to help us on our
                journey. If you’re passionate about our mission to provide
                clean, accessible transport to improve urban living we want to
                hear from you!
              </Article.Text>
              <Article.Button>Learn more</Article.Button>
            </Article.Content>
            <Article.Image
              revers={"row"}
              src={"/assets/images/join-us.jpg"}
              alt={"join-us"}
            />
          </Article>
        </Section>
        <Features>
          <Features.Title>Why join us?</Features.Title>
          <Features.Cards>
            {featuresDb.map((item) => {
              return (
                <Features.Card>
                  <Features.Image src={`/assets/images/${item.img}`} />
                  <Features.Number>{`0${item.id}`}</Features.Number>
                  <Features.CardTitle>{item.title}</Features.CardTitle>
                  <Features.Text>{item.text}</Features.Text>
                </Features.Card>
              );
            })}
          </Features.Cards>
        </Features>
        <Jobs>
          <Jobs.Cards>
            {jobsDb.map((item) => {
              return (
                <Jobs.Card key={item.id}>
                  <Jobs.Content>
                    <Jobs.Position>{item.position}</Jobs.Position>
                    <Jobs.City>{item.city}</Jobs.City>
                  </Jobs.Content>
                  <Jobs.Button>Apply</Jobs.Button>
                </Jobs.Card>
              );
            })}
          </Jobs.Cards>
        </Jobs>
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

export default Careers;
