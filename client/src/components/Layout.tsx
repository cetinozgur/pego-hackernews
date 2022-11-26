import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "@/components/footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  padding: 3rem 6rem;
  height: 100%;
`;
