import { REMOVE_ALL_FAV } from "@/mutations";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "rsuite";
import styled from "styled-components";

export const RemoveAllFavorites = ({ lengthOfFavs }: { lengthOfFavs: number }) => {
  const [RemoveAllFav] = useMutation(REMOVE_ALL_FAV);
  const { user } = useAuth0();
  const dispatch = useAppDispatch();

  const handleRemoveAll = async () => {
    const res = await RemoveAllFav({ variables: { userEmail: user?.email } });

    if (res.data.removeFromFav === "success") {
      dispatch(
        setAlert({
          type: "success",
          message: `Removed from your favorites!`,
        })
      );
    }

    window.location.reload();
  };

  return (
    <Container>
      <Button color="red" appearance="ghost" onClick={handleRemoveAll} disabled={lengthOfFavs <= 0}>
        Delete all
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: flex-end;
`;
