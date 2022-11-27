import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_STORIES_BY_TYPE } from "./queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";

export const Feed = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_STORIES_BY_TYPE, {
    variables: { storyType: type },
  });

  if (loading) {
    return <PageLoading desc="Loading Top Stories.." />;
  }

  if (error) {
    dispatch(setAlert({ type: "error", message: error.message }));
  }

  return <div>{JSON.stringify(data)}</div>;
};
