import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_STORIES_BY_TYPE } from "./queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Divider } from "rsuite";
import styled from "styled-components";
import { timeDifferenceForDate } from "@/utils/time-converter";

export const Feed = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const limit = 20;
  const { loading, data, error, fetchMore } = useQuery(GET_STORIES_BY_TYPE, {
    variables: {
      offset: 0,
      limit,
      storyType: type,
    },
  });

  const loadMore = () => {
    const currentLength = data.stories.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit,
      },
    });
  };

  if (loading) {
    return <PageLoading desc="loading stories.." />;
  }

  if (error) {
    dispatch(
      setAlert({ type: "error", message: `Internal server error. Details: ${error.message}` })
    );
  }

  return (
    <Container>
      <FeedGrid>
        {data?.stories.map((story: any, index: number) => {
          return (
            <FeedItem key={story.title} className={theme}>
              <Title href={story.url ? story.url : "#"} target="_blank" className={theme}>
                {index + 1}
                <Divider vertical />
                {story.title}
              </Title>
              <Details>
                <DetailText className={theme}>{story.score} likes</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>by {story.by.id}</DetailLink>
                <Divider vertical />
                <DetailText className={theme}>{timeDifferenceForDate(story.time)}</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>{story.descendants} comments</DetailLink>
              </Details>
            </FeedItem>
          );
        })}
      </FeedGrid>
      <LoadMore onClick={loadMore}>Load more</LoadMore>
    </Container>
  );
};

// Styles
const Container = styled.div``;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeedItem = styled.div`
  padding: 0.5rem;
  border: 1px solid #8d919b;
  border-radius: 5px;

  &.light {
    background-color: #f6f6f6;
  }
`;

const Title = styled.a`
  cursor: pointer;

  &.dark {
    color: #ededef;
  }
  &.light {
    color: #1a1d24;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 0.5rem;
  font-size: smaller;
`;

const DetailLink = styled.a`
  cursor: pointer;

  &.dark {
    color: #a7a9af;
  }
  &.light {
    color: #6e6e6e;
  }
`;

const DetailText = styled.p`
  &.dark {
    color: #a7a9af;
  }
`;

const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: larger;
  color: #a7a9af;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
