import { ADD_TO_FAV } from "@/mutations";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "rsuite";
import styled from "styled-components";

interface MakeFavoriteButtonProps {
  storyId: string;
}

export const MakeFavoriteButton = ({ storyId }: MakeFavoriteButtonProps) => {
  const [addToFav] = useMutation(ADD_TO_FAV);
  const { user } = useAuth0();
  const dispatch = useAppDispatch();

  const handleVote = async (storyId: string) => {
    const res = await addToFav({ variables: { userEmail: user?.email, storyId } });

    if (res.data.addToFav === "success") {
      dispatch(
        setAlert({
          type: "success",
          message: `Added to your favorites!`,
        })
      );
    }
  };

  return (
    <StyledButton size="xs" appearance="ghost" onClick={() => handleVote(storyId)}>
      Add to Favorites
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  font-size: 10px;
`;
