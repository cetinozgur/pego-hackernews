import { Divider } from "rsuite";
import { useAppSelector } from "@/redux/hooks";
import { timeDifferenceForDate } from "@/utils/time-converter";
import styled from "styled-components";
import { AuthorDetailsModal } from "./author-details-modal";
import { useState } from "react";

export const Comment = ({ comment }: any) => {
  const theme = useAppSelector((state) => state.theme.value);
  const [isAuthorModalOpen, setAuthorModalOpen] = useState<boolean>(false);

  return (
    <Container>
      <AuthorDetailsModal
        authorId={comment.by.id}
        isOpen={isAuthorModalOpen}
        setOpen={setAuthorModalOpen}
      />
      <Text className={theme} dangerouslySetInnerHTML={{ __html: comment.text as string }}></Text>
      <Details>
        <DetailLink onClick={() => setAuthorModalOpen(true)} className={theme}>
          {comment.by ? `by ${comment.by.id}` : "User doesn't exist anymore"}
        </DetailLink>
        <Divider vertical />
        <DetailText className={theme}>{timeDifferenceForDate(comment.time)}</DetailText>
        <Divider vertical />
      </Details>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 2rem;
  border-top: 1px solid #8d919b;
  font-size: smaller;

  &.light {
    background-color: #f6f6f6;
  }
`;

const Text = styled.p`
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
