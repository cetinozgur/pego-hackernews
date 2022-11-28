import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { CommentItem } from "./comment-item";
import { GET_COMMENTS_BY_STORY_ID } from "./queries";
import type { Comment as CommentType } from "@/gql/graphql";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { IntersectingCirclesSpinner } from "react-epic-spinners";

interface FeedItemCommentsProps {
  storyId: string;
}

export const FeedItemComments = ({ storyId }: FeedItemCommentsProps) => {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useQuery(GET_COMMENTS_BY_STORY_ID, {
    variables: {
      storyId,
    },
  });

  if (loading) {
    <IntersectingCirclesSpinner />;
  }

  if (error) {
    dispatch(
      setAlert({
        type: "error",
        message: `Can't load the stories at the moment. Details: ${error.message}`,
      })
    );
  }

  return (
    <CommentGrid>
      {data?.comments.map((comment: CommentType) => {
        return <CommentItem comment={comment} key={comment.id} />;
      })}
    </CommentGrid>
  );
};

const CommentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2rem 4rem;
`;
