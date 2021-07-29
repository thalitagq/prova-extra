import React from "react";
import { useLocation } from "react-router";
import { Car } from "../components/Card";
import styled from "styled-components";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

const Container = styled.div`
  height: 200px;
`;
const ImageLogo = styled.img`
  width: 125px;
  height: auto;
  margin-right: 35px;
`;

const MainImageCar = styled.img`
  width: 600px;
  height: auto;
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
`;

const ColorText = styled(SecondaryText)`
  font-size: 30px;
  text-transform: capitalize;
`;

const LogoTextWrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
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
`;

const BookButton = styled(BackButton)`
  color: #fff;
  background-color: #313136;
`

const NextCarsWrapper = styled.div`

` 

export const Details = (): JSX.Element => {
  const { state } = useLocation<Car>();

  return (
    <Container>
      <LogoTextWrapper>
        <ImageLogo src={require("../" + state.logo).default} />
        <div>
          <PrimaryText>
            {state.make} {state.model}
          </PrimaryText>
          <SecondaryText>${state.price_per_day}/day</SecondaryText>
        </div>
      </LogoTextWrapper>
      <MainWrapper>
        <BackButton style={{ alignSelf: "center" }}>
          <VscArrowLeft size={20} style={{ marginRight: 10 }} />
          Back to catalog
        </BackButton>
        <MainImageCar src={require("../" + state["image@2x"]).default} />
        <div>
          <PrimaryText>01</PrimaryText>
          <ColorText>{state.color}</ColorText>
        </div>
      </MainWrapper>
      <BookButton style={{ margin: "auto" }}>
        Book now
        <VscArrowRight size={20} style={{ marginLeft: 10 }} />
      </BookButton>
    </Container>
  );
};
