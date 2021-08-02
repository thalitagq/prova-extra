import React, { useState } from "react";
import { useLocation } from "react-router";
import { Car } from "../../components/Card";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { BackButton, BookButton, BottomContaier, ColorText, CurrentCarItem, ImageLogo, LogoTextWrapper, MainImageCar, MainWrapper, NextButton, NextCarItem, NextCarWrapper, PreviousCarItem, PrimaryText, SecondaryText } from "./styles";

type DetailsCar = {
  image: string;
  color: string;
  number: number;
};

type DetailsProps = {
  previous: DetailsCar;
  current: DetailsCar;
  next: DetailsCar;
};

export const Details = (): JSX.Element => {
  const { state } = useLocation<Car>();
  const history = useHistory();
  const [imagesList, setImagesList] = useState<DetailsProps>({
    previous: {
      image: state.previous_image,
      color: state.previous_color,
      number: 3,
    },
    current: {
      image: state["image@2x"],
      color: state.color,
      number: 1,
    },
    next: { image: state.next_image, color: state.next_color, number: 2 },
  });

  const nextCarHandler = () => {
    setImagesList((previousState) => {
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
    setImagesList((previousState) => {
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
        <ImageLogo src={require("../../" + state.logo).default} />
        <div>
          <PrimaryText>
            {state.make} {state.model}
          </PrimaryText>
          <SecondaryText>${state.price_per_day}/day</SecondaryText>
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
            src={require("../../" + imagesList.current.image).default}
            layout
          />
          <BookButton style={{ margin: "auto", marginBottom: 10 }}>
            Book now
            <VscArrowRight size={20} style={{ marginLeft: 10 }} />
          </BookButton>
        </div>
        <div style={{ width: 180, textAlign: "center" }}>
          <PrimaryText>{imagesList.current.number}</PrimaryText>
          <ColorText>{imagesList.current.color}</ColorText>
        </div>
      </MainWrapper>

      <BottomContaier>
        <NextButton onClick={previousCarHandler}>
          <VscArrowLeft size={18} />
        </NextButton>
        <NextCarWrapper>
          <PreviousCarItem>
            <motion.img
              src={require("../../" + imagesList.previous.image).default}
              style={{ width: "100%" }}
              layout
            />
          </PreviousCarItem>
          <CurrentCarItem>
            <motion.img
              src={require("../../" + imagesList.current.image).default}
              style={{ width: "100%" }}
              layout
            />
          </CurrentCarItem>
          <NextCarItem>
            <motion.img
              src={require("../../" + imagesList.next.image).default}
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
