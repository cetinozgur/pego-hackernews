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
    return <PageLoading desc="Top stories loading.." />;
  }

  if (error) {
    dispatch(setAlert({ type: "error", message: error.message }));
  }

  console.log(data);

  return <p>here i go.</p>;
};
