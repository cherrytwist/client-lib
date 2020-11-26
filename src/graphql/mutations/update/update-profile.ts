import { gql } from 'graphql-request';

export const updateProfile = gql`
  mutation updateProfile($profileData: ProfileInput!, $ID: Float!) {
    updateProfile(profileData: $profileData, ID: $ID)
  }
`;
