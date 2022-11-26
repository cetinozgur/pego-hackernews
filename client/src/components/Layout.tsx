import { Navbar } from "@/components/navbar";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid red; */
`;
