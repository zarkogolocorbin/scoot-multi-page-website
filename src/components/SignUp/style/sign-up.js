import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: url("/assets/patterns/semi-circles.svg"), #495567;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (max-width: 1080px) {
    background-position: center bottom;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10.2rem calc(10vw + 21px);
  display: flex;
  align-items: center;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    row-gap: 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 10.2rem calc(10vw - 5.5px);
  }
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 48px;
  letter-spacing: -2.14px;
  width: 41.5rem;
  color: #fff;
  @media screen and (max-width: 1080px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 32px;
    max-width: 100%;
  }
`;

export const Images = styled.div`
  margin-left: auto;
  display: flex;
  column-gap: 1.8rem;

  @media screen and (max-width: 1080px) {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 768px) {
    &:first-child {
      width: 113px;
      height: 40px;
    }
    &:nth-child(2) {
      width: 130px;
      height: 40px;
    }
  }
`;
