import React, { useState } from "react";
import { useLocation } from "react-router";
import { Car } from "../components/Card";
import styled from "styled-components";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const ImageLogo = styled(motion.img)`
  width: 125px;
  height: auto;
  margin-right: 35px;
  @media (max-width: 650px) {
    margin-right: 0;
  }
`;

const MainImageCar = styled(motion.img)`
  width: 600px;
  height: auto;
  @media (max-width: 650px) {
    width: 300px;
  }
`;

const PrimaryText = styled.h1`
  color: #313136;
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

const SecondaryText = styled.h1`
  color: #313136;
  font-size: 40px;
  font-weight: lighter;
  @media (max-width: 650px) {
    text-align: center;
    margin: 20px 0;
  }
`;

const ColorText = styled(SecondaryText)`
  font-size: 30px;
  text-transform: capitalize;
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  @media (max-width: 650px) {
    /* flex-wrap: wrap; */
    margin: 20px;
  }
`;

const BackButton = styled.button`
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

const BookButton = styled(BackButton)`
  color: #fff;
  background-color: #313136;
  margin-bottom: 10px;
`;

const BottomContaier = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const NextCarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const NextCarItem = styled.div`
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
  /* @media (max-width: 770px) {
    margin: 10px;
  } */
`;

const PreviousCarItem = styled(NextCarItem)``;

const CurrentCarItem = styled(NextCarItem)`
  width: 260px;
  height: 240px;
  background: linear-gradient(125deg, #c1bff1, rgba(217, 206, 239, 0.6));
`;

const NextButton = styled(BookButton)`
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  justify-self: center;
  flex-shrink: 0;
`;

type DetailsCar = {
  car: Car;
  number: number;
};

type DetailsProps = {
  previous: DetailsCar;
  current: DetailsCar;
  next: DetailsCar;
};

export const Details = (): JSX.Element => {
  const { state } = useLocation<{ previous: Car; current: Car; next: Car }>();
  const history = useHistory();
  const [carsList, setCarsList] = useState<DetailsProps>({
    previous: { car: state.previous, number: 3 },
    current: { car: state.current, number: 1 },
    next: { car: state.next, number: 2 },
  });

  const nextCarHandler = () => {
    setCarsList((previousState) => {
      const rearrangedList = {
        previous: {} as DetailsCar,
        current: {} as DetailsCar,
        next: {} as DetailsCar,
      };
      Object.assign(rearrangedList.previous, previousState.current);
      Object.assign(rearrangedList.current, previousState.next);
      Object.assign(rearrangedList.next, previousState.previous);
      return rearrangedList;
    });
  };

  const previousCarHandler = () => {
    setCarsList((previousState) => {
      const rearrangedList = {
        previous: {} as DetailsCar,
        current: {} as DetailsCar,
        next: {} as DetailsCar,
      };
      Object.assign(rearrangedList.previous, previousState.next);
      Object.assign(rearrangedList.current, previousState.previous);
      Object.assign(rearrangedList.next, previousState.current);
      return rearrangedList;
    });
  };

  return (
    <>
      <LogoTextWrapper>
        <ImageLogo src={require("../" + carsList.current.car.logo).default} />
        <div>
          <PrimaryText>
            {carsList.current.car.make} {carsList.current.car.model}
          </PrimaryText>
          <SecondaryText>
            ${carsList.current.car.price_per_day}/day
          </SecondaryText>
        </div>
      </LogoTextWrapper>
      <MainWrapper>
        <BackButton
          style={{ alignSelf: "center" }}
          onClick={() => history.push("/")}
        >
          <VscArrowLeft size={20} style={{ marginRight: 10 }} />
          Back to catalog
        </BackButton>
        <div>
          <MainImageCar
            src={require("../" + carsList.current.car["image@2x"]).default}
            layout
          />
          <BookButton style={{ margin: "auto", marginBottom: 10 }}>
            Book now
            <VscArrowRight size={20} style={{ marginLeft: 10 }} />
          </BookButton>
        </div>
        <div style={{ width: 180, textAlign: "center" }}>
          <PrimaryText>{carsList.current.number}</PrimaryText>
          <ColorText>{carsList.current.car.color}</ColorText>
        </div>
      </MainWrapper>

      <BottomContaier>
        <NextButton onClick={previousCarHandler}>
          <VscArrowLeft size={18} />
        </NextButton>
        <NextCarWrapper>
          <PreviousCarItem>
            <motion.img
              src={require("../" + carsList.previous.car.image).default}
              style={{ width: "100%" }}
              layout
            />
          </PreviousCarItem>
          <CurrentCarItem>
            <motion.img
              src={require("../" + carsList.current.car["image@2x"]).default}
              style={{ width: "100%" }}
              layout
            />
          </CurrentCarItem>
          <NextCarItem>
            <motion.img
              src={require("../" + carsList.next.car.image).default}
              style={{ width: "100%" }}
              layout
            />
          </NextCarItem>
        </NextCarWrapper>
        <NextButton onClick={nextCarHandler}>
          <VscArrowRight size={18} />
        </NextButton>
      </BottomContaier>
    </>
  );
};
