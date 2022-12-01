import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: ["feedType"],
          merge(existing, incoming, { args: { offset = 0 } }: { args: any }) {
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
        },
        // getFavsOfUsers: {
        //   keyArgs: ["userEmail"],
        //   merge(existing, incoming, { args: { offset = 0 } }: { args: any }) {
        //     const merged = existing ? existing.slice(0) : [];
        //     for (let i = 0; i < incoming.length; ++i) {
        //       merged[offset + i] = incoming[i];
        //     }
        //     return merged;
        //   },
        // },
      },
    },
  },
});
