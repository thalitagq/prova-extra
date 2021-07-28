import React from "react";
import styled, { keyframes } from "styled-components";
import ferrari from "../assets/images/ferrari-california/ferrari-california.png";

const hoverAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0.5} 
  100% { opacity: 1}
`;

const HoverMessage = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  opacity: 0;
  align-self: flex-end;
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
  flex: 1 0;
  position: relative;
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

export const Card = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Title>
          <strong>Ferrari</strong>
        </Title>
        <Subtitle>CALIFORNIA</Subtitle>
      </div>
      <img src={ferrari}></img>
      <Footer>
        <HoverMessage>Book Now</HoverMessage>
        <PriceWrapper>
          <PriceSymbol>$</PriceSymbol>
          <PricePrimaryText>725</PricePrimaryText>
          <PriceSecondaryText>/day</PriceSecondaryText>
        </PriceWrapper>
      </Footer>
    </Container>
  );
};
