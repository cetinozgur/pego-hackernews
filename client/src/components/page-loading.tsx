import { IntersectingCirclesSpinner } from "react-epic-spinners";
import styled from "styled-components";

interface PageLoadingProps {
  color?: string;
  size?: number;
  desc?: string;
}

export const PageLoading = ({ color = "#3498ff", size = 50, desc }: PageLoadingProps) => {
  return (
    <Container>
      <IntersectingCirclesSpinner color={color} size={size} />
      <LoadingText>{desc}</LoadingText>
    </Container>
  );
};

const Container = styled.div`
  /* min-height: calc(100vh - 56px - 56px); */
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f131a;
`;

const LoadingText = styled.p`
  font-style: oblique;
  color: gray;
  margin-top: 2rem;
`;
