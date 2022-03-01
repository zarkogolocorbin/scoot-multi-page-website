import styled from "styled-components";

export const Container = styled.section`
  padding: 0 calc(10vw + 21px) 12rem;

  @media screen and (max-width: 768px) {
    padding: 3rem calc(10vw - 5.5px) 10rem;
  }
`;
export const Hero = styled.section`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    row-gap: 3.2rem;
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 48px;
  letter-spacing: -2.14px;
  color: #495567;
  flex: 0 1 351px;
  @media screen and (max-width: 1080px) {
    flex: 0 1 auto;
    text-align: center;
    font-size: 3.2rem;
    line-height: 32px;
    letter-spacing: -1.43px;
  }
`;
export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 25px;
  color: #939caa;
  flex: 0 1 445px;
  margin-right: auto;
  @media screen and (max-width: 1080px) {
    flex: 0 1 auto;
    text-align: center;
  }
`;
export const Button = styled.button`
  background: #fcb72b;
  color: #fff;
  display: block;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 25px;
  font-family: Space Mono, sans-serif;
  cursor: pointer;
  flex: 0 0 185px;
  padding: 1.4rem 4.5rem;
  @media screen and (max-width: 1080px) {
    flex: 1 0 auto;
  }

  &:hover {
    border-color: #fcb72b;
    background-color: transparent;
    color: #fcb72b;
  }
`;

export const City = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.6rem;
    padding: 3rem 0 7.2rem;
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 2.2rem 0;
  background-color: rgba(252, 183, 43, 0.15);
  text-align: center;
  color: #495567;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: -1.07px;
`;
