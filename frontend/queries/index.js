import client from "../apollo-client";
export * from "./articles";
export * from "./categories";
export * from "./global";
export * from "./homepage";

export const getQuery = async (query, params) => {
  return await client.query({
    query: query(params),
  });
};
