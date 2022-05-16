import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { Section, Article } from "../components/Section";
import Features from "../components/Features";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { aboutDb } from "../db/aboutDB";
import { featuresDb } from "../db/featuresDB";
import { firstAccordionDb, secondAccordionDb } from "../db/accordionDB";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";

const animationOne = {
  in: {
    y: 0,
    opacity: 1,
  },

  out: {
    y: -10,
    opacity: 0,
  },
};

const About = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={{ duration: 0.75 }}
    >
      <Helmet>
        <title>Scoot multi page website | About Page</title>
        <meta
          name="description"
          content="scoot multi page website about page "
        />
      </Helmet>
      <Header close={isSidebarOpen}>
        <Header.Nav close={isSidebarOpen}>
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
        <Header.AboutHero>
          <Header.HeroTitle>About</Header.HeroTitle>
        </Header.AboutHero>
        <Sidebar close={isSidebarOpen}>
          <Sidebar.Links close={isSidebarOpen}>
            <Sidebar.Link to="/about" onClick={() => isSidebarOpen(false)}>
              About
            </Sidebar.Link>
            <Sidebar.Link to="/locations" onClick={() => isSidebarOpen(false)}>
              Locations
            </Sidebar.Link>
            <Sidebar.Link to="/careers" onClick={() => isSidebarOpen(false)}>
              Careers
            </Sidebar.Link>
            <Sidebar.Button>Get Scootin</Sidebar.Button>
          </Sidebar.Links>
        </Sidebar>
      </Header>
      <Main>
        <Section>
          {aboutDb.map((about) => {
            return (
              <Article revers={about.revers}>
                <Article.Content>
                  <Article.Title>{about.title}</Article.Title>
                  <Article.Text>{about.text}</Article.Text>
                </Article.Content>
                <Article.Image
                  revers={about.revers}
                  src={`/assets/images/${about.img}`}
                  alt={about.img}
                />
              </Article>
            );
          })}
        </Section>
        <Features>
          <Features.Title>Our values</Features.Title>
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
        <Accordion>
          <Accordion.Title>FAQs</Accordion.Title>
          <Accordion.Frame>
            <Accordion.Subtitle>How it works</Accordion.Subtitle>
            <Accordion.Wrapper>
              {firstAccordionDb.map((item) => {
                return (
                  <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion.Wrapper>
          </Accordion.Frame>
          <Accordion.Frame>
            <Accordion.Subtitle>Safe driving</Accordion.Subtitle>
            <Accordion.Wrapper>
              {secondAccordionDb.map((item) => {
                return (
                  <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion.Wrapper>
          </Accordion.Frame>
        </Accordion>
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
    </motion.div>
  );
};

export default About;
