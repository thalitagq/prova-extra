import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar/index";

const InnerContainer = styled.div`
  padding: 1rem;
  background: linear-gradient(125deg, #ffffff, #d8d7d7);
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

export const Layout = ({
  children,
}: PropsWithChildren<ReactNode>): JSX.Element => {
  return (
    <>
      <Navbar />
      <InnerContainer>{children}</InnerContainer>
    </>
  );
};
