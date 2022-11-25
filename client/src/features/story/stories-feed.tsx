import { useQuery } from "@apollo/client";
import { GET_STORIES } from "./queries";

export const StoriesFeed = () => {
  const { loading, error, data } = useQuery(GET_STORIES);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {data &&
        data.stories.map((story) => {
          return (
            <div key={story.id}>
              <p>{JSON.stringify(story)}</p>
              <hr />
            </div>
          );
        })}
      <p>yo</p>
    </div>
  );
};
