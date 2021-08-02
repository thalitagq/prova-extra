import React, { useState } from "react";
import { Card } from "../components/Card";
import data from "../cars.json";
import styled from "styled-components";
import { ReactComponent as ArrowUp } from "../assets/icons/arrow_up.svg";
import { Car } from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 1;
`;

const ScrollTopBUtton = styled.div`
  background-color: #e6d3f1;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 10%;
  right: 10%;
  cursor: pointer;
`;

export const Home = (): JSX.Element => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const scrollTopHandler = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!isScrollButtonVisible && window.pageYOffset > 200) {
      setIsScrollButtonVisible(true);
    } else if (isScrollButtonVisible && window.pageYOffset <= 200) {
      setIsScrollButtonVisible(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Container>
      {data.cars.map((car, index, carsArray) => {
        const previousAndNext = {previous: {} as Car, next: {} as Car }

        Object.assign(
          previousAndNext.previous,
          carsArray[(index + carsArray.length - 1) % carsArray.length]
        );
        Object.assign(
          previousAndNext.next,
          carsArray[(index + 1) % carsArray.length]
        );
        return (
          <Card
            car={car}
            key={car.model}
          />
        );
      })}
      {isScrollButtonVisible && (
        <ScrollTopBUtton onClick={scrollTopHandler}>
          <ArrowUp />
        </ScrollTopBUtton>
      )}
    </Container>
  );
};
