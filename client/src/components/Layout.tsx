import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid red; */
`;

const Content = styled.div`
  padding: 3rem 6rem;
`;

// const Footer = styled.div``;
