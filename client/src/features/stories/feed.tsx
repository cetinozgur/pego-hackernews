import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_STORIES_BY_TYPE } from "./queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Divider } from "rsuite";
import styled from "styled-components";
import { Pagination } from "rsuite";
import { useState } from "react";

export const Feed = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const { loading, error, data } = useQuery(GET_STORIES_BY_TYPE, {
    variables: { storyType: type },
  });
  const [activePage, setActivePage] = useState(5);

  if (loading) {
    return <PageLoading desc="Loading Stories.." />;
  }

  if (error) {
    dispatch(setAlert({ type: "error", message: error.message }));
  }

  return (
    <Container>
      <FeedGrid>
        {data?.stories.map((story) => {
          return (
            <FeedItem key={story.id} className={theme}>
              <Title href={story.url ? story.url : "#"} target="_blank" className={theme}>
                {story.title}
              </Title>
              <Details>
                <DetailText className={theme}>{story.score} likes</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>by {story.by.id}</DetailLink>
                <Divider vertical />
                <DetailText className={theme}>3 hours ago</DetailText>
                <Divider vertical />
                <DetailLink className={theme}>{story.descendants} comments</DetailLink>
              </Details>
            </FeedItem>
          );
        })}
      </FeedGrid>
      <Pagination
        prev
        last
        next
        first
        size="md"
        total={data ? data.stories.length : 0}
        limit={20}
        activePage={activePage}
        onChangePage={setActivePage}
        style={{ marginTop: "1rem" }}
      />
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeedItem = styled.div`
  border: 1px solid #8d919b;
  border-radius: 5px;
  padding: 1rem;

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
  margin-top: 1rem;
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
