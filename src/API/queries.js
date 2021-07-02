import { gql } from "@apollo/client";
export const CATEGORIES_CURRENCIES = gql(
  `query{category{products{category}} currencies}`
);
export const PRODUCTS = gql(
  `query getProducts($title: String!){category(input: {title: $title}){products{name}}}`
);
