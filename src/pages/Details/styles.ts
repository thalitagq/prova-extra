import { motion } from "framer-motion";
import styled from "styled-components";

export const ImageLogo = styled(motion.img)`
  width: 125px;
  height: auto;
  margin-right: 35px;
  @media (max-width: 650px) {
    margin-right: 0;
  }
`;

export const MainImageCar = styled(motion.img)`
  width: 600px;
  height: auto;
  @media (max-width: 650px) {
    width: 300px;
  }
`;

export const PrimaryText = styled.h1`
  color: #313136;
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

export const SecondaryText = styled.h1`
  color: #313136;
  font-size: 40px;
  font-weight: lighter;
  @media (max-width: 650px) {
    text-align: center;
    margin: 20px 0;
  }
`;

export const ColorText = styled(SecondaryText)`
  font-size: 30px;
  text-transform: capitalize;
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  @media (max-width: 650px) {
    /* flex-wrap: wrap; */
    margin: 20px;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: #313136;
  height: 50px;
  border: 1px solid #313136;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0px 5px 20px #0000001a;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const BookButton = styled(BackButton)`
  color: #fff;
  background-color: #313136;
  margin-bottom: 10px;
`;

export const BottomContaier = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const NextCarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const NextCarItem = styled.div`
  background: linear-gradient(
    125deg,
    rgba(213, 213, 213, 0.7),
    rgba(212, 212, 212, 0.5)
  );
  width: 200px;
  height: 180px;
  border-radius: 15px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 5px;
  margin: 10px;
`;

export const PreviousCarItem = styled(NextCarItem)``;

export const CurrentCarItem = styled(NextCarItem)`
  width: 260px;
  height: 240px;
  background: linear-gradient(125deg, #c1bff1, rgba(217, 206, 239, 0.6));
`;

export const NextButton = styled(BookButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  justify-self: center;
  flex-shrink: 0;
`;
