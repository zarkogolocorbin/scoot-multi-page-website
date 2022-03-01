import styled from "styled-components";

export const Container = styled.section`
  padding: 16rem calc(10vw + 21px) 0;

  @media screen and (max-width: 728px) {
    padding: 16rem calc(10vw - 5.5px) 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;
export const Cards = styled.article`
  display: flex;
  column-gap: 3rem;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    row-gap: 4rem;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  column-gap: 6rem;
  row-gap: 4rem;

  @media screen and (max-width: 1080px) {
    flex-direction: row;
  }
  @media screen and (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Image = styled.img``;
export const Text = styled.p`
  color: #495567;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 25px;
`;
export const Title = styled.h1`
  color: #495567;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: -1.07px;
`;
