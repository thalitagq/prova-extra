import React from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0.5} 
  100% { opacity: 1}
`;

const hoverAnimationCar = keyframes`
  0% { margin-left: -100% }
  /* 50% { margin-left: -50% } */
  100% { margin-left: 0%}
`;

const HoverMessage = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  opacity: 0;
  align-self: flex-end;
`;

const CarImage = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  background-color: #f8f8fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px 15px;
  width: 290px;
  height: 225px;
  flex: "initial" 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  &::after {
    content: "";
    background-image: linear-gradient(52deg, #a1a7f4, #e6d3f1);
    border-radius: 20px;
    width: 290px;
    height: 225px;
    flex: 1 0;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  &:hover {
    animation: ${hoverAnimation} 0.3s ease forwards;
    &::after {
      z-index: -1;
      opacity: 1;
    }
    ${HoverMessage} {
      animation: ${hoverAnimation} 0.3s ease forwards;
    }
    ${CarImage} {
      animation: ${hoverAnimationCar} 0.25s linear forwards;
    }
  }
`;

const Title = styled.h1`
  color: #313136;
  font-size: 17px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 3px;
`;

const Subtitle = styled(Title)`
  font-weight: lighter;
  text-transform: uppercase;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const PriceSymbol = styled.span`
  color: #313136;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
`;

const PricePrimaryText = styled.span`
  color: #313136;
  font-size: 24px;
  font-weight: bold;
`;

const PriceSecondaryText = styled.span`
  color: #313136;
  font-size: 14px;
  font-weight: lighter;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export type Car = {
  make: string;
  model: string;
  image: string;
  "image@2x": string;
  price_per_day: number;
  logo: string;
  color: string;
};

type CardProps = {
  car: Car;
  previousAndNextCar: {previous: Car, next: Car}
};

export const Card = (props: CardProps): JSX.Element => {
  const history = useHistory();

  const onClickCardHandler = () => {
    history.push({
      pathname: `details/${props.car.make}/${props.car.model}`,
      state: {previous: props.previousAndNextCar.previous, current: props.car, next: props.previousAndNextCar.next },
    });
  };

  return (
    <Container onClick={onClickCardHandler}>
      <div>
        <Title>
          <strong>{props.car.make}</strong>
        </Title>
        <Subtitle>{props.car.model}</Subtitle>
      </div>
      <CarImage src={require("../" + props.car.image).default} />
      <Footer>
        <HoverMessage>Book Now</HoverMessage>
        <PriceWrapper>
          <PriceSymbol>$</PriceSymbol>
          <PricePrimaryText>{props.car.price_per_day}</PricePrimaryText>
          <PriceSecondaryText>/day</PriceSecondaryText>
        </PriceWrapper>
      </Footer>
    </Container>
  );
};
