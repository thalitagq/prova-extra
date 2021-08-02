import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  height: 80px;
  padding: 0 20px;
  box-shadow: 0px 10px 30px #0000001a;
`;

export const Title = styled.h1`
  color: #313136;
  font-size: 24px;
  font-weight: normal;
  margin-right: 5px;
`;

export const Subtitle = styled.h1`
  color: #313136;
  font-size: 16px;
  font-weight: 300;
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

export const MiddleContainer = styled.div`
  background-color: #f3f1fc;
  width: 500px;
  min-height: 35px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0 10px 20px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const MiddleContainerText = styled.p`
  color: #656469;
  font-size: 12px;
`;

export const MiddleContainerTextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  svg {
    path {
      fill: #c4c4c4;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.button`
  color: #7b89f4;
  height: 35px;
  padding: 0 15px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
`;

export const AuthButton2 = styled(AuthButton)`
  border: 2px solid #7b89f4;
  border-radius: 13px;
`;
