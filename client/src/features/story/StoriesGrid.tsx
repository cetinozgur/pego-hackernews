import { useQuery } from "@apollo/client";
import { STORIES } from "./queries";

export const StoriesGrid = () => {
  const { loading, error, data } = useQuery(STORIES);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(data.stories);

  return (
    <div>
      <p>yo</p>
    </div>
  );
};
