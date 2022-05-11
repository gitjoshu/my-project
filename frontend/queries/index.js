import client from "../apollo-client";

export const getQuery = async (query, params) => {
  return await client.query({
    query: query(params),
  });
};
