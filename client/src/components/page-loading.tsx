import { IntersectingCirclesSpinner } from "react-epic-spinners";
import { Stack } from "rsuite";
import styled from "styled-components";

interface PageLoadingProps {
  color?: string;
  size?: number;
  desc?: string;
}

export const PageLoading = ({ color = "#3498ff", size = 50, desc }: PageLoadingProps) => {
  return (
    <Container>
      <Stack direction="column" spacing={20}>
        <IntersectingCirclesSpinner color={color} size={size} mar />
        {desc}
      </Stack>
    </Container>
  );
};

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
