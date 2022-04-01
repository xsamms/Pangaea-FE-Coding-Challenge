import { gql } from "@apollo/client";

export const getProducts = gql`
  {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;
