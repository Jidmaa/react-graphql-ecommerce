import { gql } from "@apollo/client";
export const CATEGORIES_CURRENCIES = gql(
  `query{category{products{category}} currencies}`
);
