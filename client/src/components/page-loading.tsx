import { IntersectingCirclesSpinner } from "react-epic-spinners";
import styled from "styled-components";

interface PageLoadingProps {
  color?: string;
  size?: number;
  desc?: string;
}

export const PageLoading = ({ color = "#3498ff", size = 50 }: PageLoadingProps) => {
  return (
    <Container>
      <IntersectingCirclesSpinner color={color} size={size} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
