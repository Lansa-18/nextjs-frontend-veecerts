import { gql } from "urql";

export const EMAIL_PASSWORD_SIGN_IN = gql`
  mutation EmailPasswordSignin($input: EmailPasswordSigninInput!) {
    emailPasswordSignin(input: $input) {
      __typename
      id
      token
      refreshToken
    }
  }
`;

export const EMAIL_PASSWORD_SIGN_UP = gql`
  mutation EmailPasswordSignup($input: EmailPasswordSignupInput!) {
    emailPasswordSignup(input: $input) {
      __typename
      id
      uuid
    }
  }
`;
