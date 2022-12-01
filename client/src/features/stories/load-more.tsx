import { Button, Divider } from "rsuite";
import styled from "styled-components";

interface LoadMoreProps {
  currentFeedLength: number;
  totalFeedLength: number;
  loadMore: () => void;
}

export const LoadMore = ({ currentFeedLength, totalFeedLength, loadMore }: LoadMoreProps) => {
  const isMore = currentFeedLength < totalFeedLength ? true : false;

  return (
    <Container>
      <Details>
        <p>Total: {totalFeedLength} </p>
        <Divider vertical />
        <p>Shown: {currentFeedLength}</p>
        <Divider vertical />
        <p>Remaining: {totalFeedLength - currentFeedLength} </p>
      </Details>
      <Button disabled={!isMore} onClick={loadMore} appearance="ghost">
        {isMore ? "Load More" : "No more stories to show"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & button {
    width: 100%;
    margin-top: 2rem;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
