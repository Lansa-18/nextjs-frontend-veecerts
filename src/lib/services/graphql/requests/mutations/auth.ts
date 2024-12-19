import { gql } from "urql";

export const EMAIL_PASSWORD_SIGN_IN = gql`
  mutation EmailPasswordSignin($input: EmailPasswordSigninInput!) {
    emailPasswordSignin(input: $input) {
      id
      token
      refreshToken
    }
  }
`;

export const EMAIL_PASSWORD_SIGN_UP = gql`
  mutation EmailPasswordSignup($input: EmailPasswordSignupInput!) {
    emailPasswordSignup(input: $input) {
      id
      uuid
    }
  }
`;
