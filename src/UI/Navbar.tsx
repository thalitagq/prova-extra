import React from "react";
import styled from "styled-components";
import { ReactComponent as MapPin } from "../assets/icons/map_pin.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0px 10px 30px #0000001a;
`;

const Title = styled.h1`
  color: #313136;
  font-size: 24px;
  font-weight: normal;
  margin-right: 5px;
`;

const Subtitle = styled.h1`
  color: #313136;
  font-size: 16px;
  font-weight: 300;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

const MiddleContainer = styled.div`
  background-color: #f3f1fc;
  width: 500px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

const MiddleContainerText = styled.p`
  color: #656469;
  font-size: 12px;
`;

const MiddleContainerTextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    path {
      fill: #c4c4c4;
    }
  }
`;

const SearchButton = styled.button`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthButton = styled.button`
  color: #7b89f4;
  height: 35px;
  padding: 0 15px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
`;

const AuthButton2 = styled(AuthButton)`
  border: 2px solid #7b89f4;
  border-radius: 13px;
`;

export const Navbar = (): JSX.Element => {
  return (
    <Container>
      <TitleWrapper>
        <Title>EXOTIC</Title>
        <Subtitle>CARS</Subtitle>
      </TitleWrapper>
      <MiddleContainer>
        <MiddleContainerTextIconWrapper>
          <MapPin style={{ marginRight: 5 }} />
          <MiddleContainerText>North Carolina, NC 90025</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <MiddleContainerTextIconWrapper>
          <Calendar style={{ marginRight: 5 }} />
          <MiddleContainerText>11/03/2021</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <MiddleContainerTextIconWrapper>
          <Calendar style={{ marginRight: 5 }} />
          <MiddleContainerText>12/12/2021</MiddleContainerText>
        </MiddleContainerTextIconWrapper>
        <SearchButton>
          <Search />
        </SearchButton>
      </MiddleContainer>
      <AuthButtonsContainer>
        <AuthButton>
          Sign up
        </AuthButton> 
        <AuthButton2>
          Sign in
        </AuthButton2>
      </AuthButtonsContainer>
    </Container>
  );
};
