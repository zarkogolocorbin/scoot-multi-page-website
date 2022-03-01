import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 calc(10vw + 21px) 16rem;
  row-gap: 6.4rem;

  @media screen and (max-width: 768px) {
    padding: 0 calc(10vw - 5.5px) 12rem;
    row-gap: 4.8rem;
  }
`;

export const Title = styled.h1`
  align-self: center;
  color: #495567;
  font-size: 4rem;
  line-height: 48px;
  letter-spacing: -2.14px;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 32px;
    letter-spacing: -1.43px;
  }
`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const SubTitle = styled.h2`
  flex-basis: 500px;
  color: #495567;
  font-size: 4rem;
  line-height: 48px;
  letter-spacing: -2.14px;

  @media screen and (max-width: 1080px) {
    flex-basis: auto;
    margin-bottom: 3.2rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 32px;
    letter-spacing: -1.43px;
  }
`;

export const Item = styled.div`
  margin-bottom: 1.6rem;
  color: #495567;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 4rem;
  background-color: #f2f5f9;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: -1.07px;
  column-gap: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 24px;
    letter-spacing: -0.8px;
    padding: 3.2rem 2.8rem 3.2rem;
  }
`;

export const Body = styled.p`
  padding: 0 3.2rem 4rem;
  background-color: #f2f5f9;
  font-size: 1.5rem;
  line-height: 25px;
`;
