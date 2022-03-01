import styled from "styled-components";

export const Container = styled.section`
  padding: 0 calc(10vw + 21px) 12rem;

  @media screen and (max-width: 768px) {
    padding: 0 calc(10vw - 5.5px) 12rem;
  }
`;

export const Title = styled.h1`
  color: #495567;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 48px;
  letter-spacing: -2.14px;
  text-align: center;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 32px;
    letter-spacing: -1.43px;
  }
`;

export const Cards = styled.article`
  display: flex;
  column-gap: 2.8rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    row-gap: 5.6rem;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: 1.07px;
`;
export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 25px;
  text-align: center;
  margin-top: 2.7rem;
`;
export const Image = styled.img`
  display: block;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  margin: 0 auto;
`;
export const Number = styled.div`
  margin: 0 auto;
  transform: translateY(-4.8rem);
  width: 9.6rem;
  height: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fcb72b;
  color: #495567;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
`;
