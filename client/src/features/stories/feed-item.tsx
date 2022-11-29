import { Divider } from "rsuite";
import styled from "styled-components";
import { useAppSelector } from "@/redux/hooks";
import { timeDifferenceForDate } from "@/utils/time-converter";
import { FeedItemComments } from "./feed-item-comments";
import { useState } from "react";
import type { Story as StoryType } from "@/gql/graphql";
import { AuthorDetailsPopover } from "./author-details-popover";

interface FeedItemProps {
  story: StoryType;
  index: number;
}

export const FeedItem = ({ story, index }: FeedItemProps) => {
  const theme = useAppSelector((state) => state.theme.value);
  const [showCommentsForId, setShowCommentsForId] = useState<string>("");

  const handleShowComments = (storyId: string) => {
    showCommentsForId === storyId ? setShowCommentsForId("") : setShowCommentsForId(storyId);
  };

  const handleVote = (storyId: string) => {
    console.log("voted");
  };

  return (
    <Container className={theme}>
      <Title href={story.url ? story.url : "#"} target="_blank" className={theme}>
        {index + 1}
        <Divider vertical />
        {story.title}
      </Title>
      <Details>
        <DetailText className={theme}>{story.score} likes</DetailText>
        <Divider vertical />
        <AuthorDetailsPopover user={story.by}>
          <DetailLink className={theme}>by {story.by.id}</DetailLink>
        </AuthorDetailsPopover>
        <Divider vertical />
        <DetailText className={theme}>{timeDifferenceForDate(story.time)}</DetailText>
        <Divider vertical />
        <DetailLink
          className={theme}
          onClick={() => handleShowComments(story.id)}
          style={
            (story.descendants as number) > 0
              ? { pointerEvents: "auto" }
              : { pointerEvents: "none" }
          }
        >
          {showCommentsForId === story.id ? `Hide` : `${story.descendants} comments`}
        </DetailLink>
        <Divider vertical />
        <DetailLink className={theme} onClick={() => handleVote(story.id)}>
          Vote
        </DetailLink>
      </Details>
      {showCommentsForId === story.id && <FeedItemComments storyId={story.id} />}
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 1rem;
  border: 1px solid #8d919b;
  border-radius: 5px;

  &.light {
    background-color: #f6f6f6;
  }
  &.dark {
    background-color: #19191c;
  }

  &:hover {
    border-color: #fff;
  }
`;

const Title = styled.a`
  cursor: pointer;

  &.dark {
    color: #fff;
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
