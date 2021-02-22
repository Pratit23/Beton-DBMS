import { gql } from 'apollo-boost';

const users = gql`
{
    users{
        name
        email
        address
        dob
    }
}
`

const addUser = gql`
mutation($name: String!, $email: String!, $password: String!, $dob: String!, $address: String!){
    addUser(name: $name, email: $email, password: $password, dob: $dob, address: $address){
      name
      email
      password
      address
    }
}
`

const loginQuery = gql`
  mutation($email:String!, $password: String!){
    login(email:$email, password:$password){
      name
      email
      password
      address
      dob
      token
    }
  }
`;

const existingBaseCoordinate = gql`
query($latitude: String!, $longitude: String!){
  existingBaseCoordinate(latitude: $latitude, longitude: $longitude){
    id
    location
    userID{
			name
      email
      id
    }
  }
}
`;

const addBaseReport = gql`
mutation($image: String!, $address: String!, $location: String!, $reportedAt: String!, $reportedOn: String!, $userID: ID!, $noOfReports: Int!){
  addBaseReport(image: $image, address: $address, location: $location, reportedAt: $reportedAt, reportedOn: $reportedOn, userID: $userID, noOfReports: $noOfReports){
    id
    location
    userID{
      id
      name
      email
    }
  }
}
`;

const addReport = gql`
mutation($image: String!, $address: String!, $location: String!, $reportedAt: String!, $reportedOn: String!, $userID: ID!, $baseParent: ID!, $level: String!){
  addReport(image: $image, address: $address, location: $location, reportedAt: $reportedAt, reportedOn: $reportedOn, userID: $userID, baseParent: $baseParent, level: $level){
    id
    location
    userID{
      id
      name
      email
    }
    baseParent{
      id
      location
      userID{
        id
        name
        email
      }
    }
  }
}
`;

const decrypt = gql`
query($token: String!){
  decrypt(token: $token){
    name
    email
    id
    level
  }
}
`

export {
  users,
  addUser,
  loginQuery,
  existingBaseCoordinate,
  addBaseReport,
  addReport,
  decrypt
};