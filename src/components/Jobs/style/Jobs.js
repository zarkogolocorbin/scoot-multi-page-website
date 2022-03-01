import styled from "styled-components";

export const Container = styled.section`
  padding: 0 calc(10vw + 21px) 16rem;

  @media screen and (max-width: 1080px) {
    padding-bottom: 12rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 calc(10vw - 5.5px) 10rem;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.2rem 6.4rem 3.5rem 4rem;
  background: #f2f5f9;
  color: #495567;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 3.6rem 3.2rem 3.2rem;
    row-gap: 1.6rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;
export const Position = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: -1.07px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const City = styled.p`
  font-size: 1.5rem;
  line-height: 25px;
`;
export const Button = styled.button`
  display: block;
  background-color: #fcb72b;
  font-weight: 700;
  padding: 1.4rem 6.5rem;
  font-size: 1.5rem;
  line-height: 25px;
  border: 1px solid transparent;
  color: #fff;
  font-family: Space Mono, sans-serif;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    color: #fcb72b;
    background: transparent;
    border-color: #fcb72b;
  }
`;
