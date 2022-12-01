/* eslint-disable no-var */
import { GET_AUTHOR_DETAILS } from "@/queries";
import { useQuery } from "@apollo/client";
import { Modal, Button, Stack } from "rsuite";
import { timeDifferenceForDate } from "@/utils/time-converter";
import styled from "styled-components";
import { Person } from "@styled-icons/bootstrap";
import ReactHtmlParser from "react-html-parser";
import { FingerprintSpinner } from "react-epic-spinners";

interface AuthorDetailsModalProps {
  authorId: string;
  setOpen: (arg: boolean) => void;
  isOpen: boolean;
}

export const AuthorDetailsModal = ({ authorId, isOpen, setOpen }: AuthorDetailsModalProps) => {
  if (isOpen) {
    var { data } = useQuery(GET_AUTHOR_DETAILS, {
      variables: { authorId },
    });
  }

  return (
    <Modal open={isOpen} onClose={() => setOpen(false)} size="sm">
      {data ? (
        <Content>
          <>
            <Stack spacing={15} alignItems="flex-start">
              <Person size={30} />
              <h4>{data?.author?.id}</h4>
            </Stack>
            <hr />
            <p>
              <span>About:</span>
              {ReactHtmlParser(data?.author?.about as string)}
            </p>
            <p>
              <span>Karma:</span>
              {data?.author?.karma}
            </p>
            <p>
              <span>Joined:</span>
              {timeDifferenceForDate(data?.author?.created)}
            </p>
            <p>
              <span>Submitted stories:</span>
              {data?.author?.submitted?.length}
            </p>
          </>
        </Content>
      ) : (
        <Stack justifyContent="center" style={{ marginTop: "2rem" }}>
          <FingerprintSpinner size={40} />
        </Stack>
      )}
      <Modal.Footer>
        <Button onClick={() => setOpen(false)} appearance="link">
          Return to feed
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const Content = styled.div`
  p {
    word-wrap: break-word;
  }

  span {
    font-weight: bold;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  i {
    margin-top: 2rem;
  }

  a {
    cursor: pointer;
    margin-top: 2rem;
    font-size: larger;
  }
`;
