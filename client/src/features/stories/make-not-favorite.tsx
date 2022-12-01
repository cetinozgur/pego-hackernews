import { REMOVE_FROM_FAV } from "@/mutations";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "rsuite";
import styled from "styled-components";

interface MakeNotFavoriteButtonProps {
  storyId: string;
}

export const MakeNotFavoriteButton = ({ storyId }: MakeNotFavoriteButtonProps) => {
  const [removeFromFav] = useMutation(REMOVE_FROM_FAV);
  const { user } = useAuth0();
  const dispatch = useAppDispatch();

  const makeNotFavorite = async (storyId: string) => {
    const res = await removeFromFav({ variables: { userEmail: user?.email, storyId } });

    console.log(res);

    if (res.data.removeFromFav === "success") {
      dispatch(
        setAlert({
          type: "success",
          message: `Removed from your favorites!`,
        })
      );
    }
  };

  return (
    <StyledButton size="xs" appearance="ghost" onClick={() => makeNotFavorite(storyId)}>
      Remove from favorites
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  font-size: 10px;
`;
