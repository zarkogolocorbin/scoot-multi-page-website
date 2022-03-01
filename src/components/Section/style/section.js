import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 140px;
  padding: 200px 0;

  @media screen and (max-width: 1080px) {
    padding: 137px 0;
    row-gap: 120px;
  }
  @media screen and (max-width: 768px) {
    padding: 120px 0;
  }
`;

export const ArticleContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.revers};
  align-items: center;
  padding: 0 calc(10vw + 21px);
  overflow: hidden;

  &:nth-child(1)::after {
    position: absolute;
    left: 88.5%;
    content: url("/assets/patterns/circle.svg");
    margin-left: 6.4rem;
  }

  &:nth-child(1)::before {
    position: absolute;
    bottom: 0;
    left: 55%;
    z-index: 1;
    content: url("/assets/patterns/left-downward-arrow.svg");
  }

  &:nth-child(2)::before {
    position: absolute;
    right: 88.5%;
    content: url("/assets/patterns/circle.svg");
    margin-right: 6.4rem;
  }

  &:nth-child(2)::after {
    position: absolute;
    left: 0;
    top: 0;
    content: url("/assets/patterns/right-arrow.svg");
  }
  &:nth-child(3)::after {
    position: absolute;
    left: 88.5%;
    content: url("/assets/patterns/circle.svg");
    margin-left: 6.4rem;
  }
  &:nth-child(3)::before {
    position: absolute;
    top: 25%;
    left: 65%;
    z-index: 1;
    content: url("/assets/patterns/left-downward-arrow.svg");
  }

  @media screen and (max-width: 528px) {
    &:nth-child(1)::after {
      content: "";
    }
    &:nth-child(2)::before {
      content: "";
    }
    &:nth-child(3)::after {
      content: "";
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 calc(10vw - 5.5px);

    &:nth-child(2)::after {
      left: -50%;
    }
    &:nth-child(3)::before {
      top: 0;
      left: 40%;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
    row-gap: 6.4rem;

    &:nth-child(1)::after {
      position: absolute;
      left: 80.5%;
      top: 0;
    }

    &:nth-child(1)::before {
      position: absolute;
      bottom: 50%;
      left: calc(10vw - 5.5px);
      width: 100%;
    }

    &:nth-child(2)::before {
      position: absolute;
      right: 80.5%;
      top: 0;
    }

    &:nth-child(3)::after {
      position: absolute;
      left: 80.5%;
      top: 0;
    }
  }
`;

export const Content = styled.div`
  max-width: 445px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1080px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #495567;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 48px;
  letter-spacing: -2.14px;
  @media screen and (max-width: 1080px) {
    text-align: center;
  }

  @media screen and (max-width: 728px) {
    font-size: 3.2rem;
    line-height: 32px;
    letter-spacing: -1.43px;
  }
`;

export const Text = styled.p`
  color: #939caa;
  font-size: 1.5rem;
  line-height: 25px;
  margin-top: 2.4rem;
  @media screen and (max-width: 1080px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 1.5rem;
  line-height: 25px;
  background: #fcb72b;
  border: 1px solid #fff;
  outline: none;
  padding: 1.4rem 4.35rem;
  margin-top: 4rem;
  font-family: "Space Mono", monospace;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fcb72b;
    background: #fff;
    border: 1px solid #fcb72b;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 445px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin-left: ${(props) => (props.revers === "row" ? "auto" : null)};
  margin-right: ${(props) => (props.revers === "row-reverse" ? "auto" : null)};

  @media screen and (max-width: 1080px) {
    margin: 0;
  }
  @media screen and (max-width: 528px) {
    max-width: 311px;
  }
`;
