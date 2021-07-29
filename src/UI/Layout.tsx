import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const InnerContainer = styled.div`
  padding: 1rem;
  background: linear-gradient(125deg, #ffffff, #d8d7d7);
  height: calc(100vh - 80px);
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
