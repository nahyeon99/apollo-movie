import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};
