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
