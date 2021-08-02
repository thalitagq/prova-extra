import React from "react";
import { ReactComponent as MapPin } from "../../assets/icons/map_pin.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import {
  AuthButton,
  AuthButton2,
  AuthButtonsContainer,
  Container,
  MiddleContainer,
  MiddleContainerText,
  MiddleContainerTextIconWrapper,
  SearchButton,
  Subtitle,
  Title,
  TitleWrapper,
} from "./styles";

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
        <MiddleContainerTextIconWrapper style={{ marginRight: 10 }}>
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
        <AuthButton>Sign up</AuthButton>
        <AuthButton2>Sign in</AuthButton2>
      </AuthButtonsContainer>
    </Container>
  );
};
