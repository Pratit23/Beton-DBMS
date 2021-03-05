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
    }
}
`

const loginQuery = gql`
  mutation($email:String!, $password: String!){
    login(email:$email, password:$password){
      name
      email
      password
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
mutation($image: String!, $address: String!, $location: String!, $reportedAt: String!, $reportedOn: String!, $userID: ID!, $baseParent: ID!, $karma: Int!){
  addReport(image: $image, address: $address, location: $location, reportedAt: $reportedAt, reportedOn: $reportedOn, userID: $userID, baseParent: $baseParent, karma: $karma){
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
query($token: String){
  decrypt(token: $token){
    name
    email
    id
    karma
    reports {
      reportedAt
      reportedOn
    }
  }
}
`

const decryptAdvertiser = gql`
query($token: String){
  decryptAdvertiser(token: $token){
    company
    email
    id
    website
    category
    advertisments{
      id
      title
      image
      link
      screentime
      outreach
    }
    coupons{
      id
      name
      validity
      amount
    }
  }
}
`

const addAdvertiser = gql`
mutation($company: String!, $email: String!, $password: String!, $website: String!, $category: String!){
  addAdvertiser(company: $company, email: $email, password: $password, website: $website, category: $category){
    email
    company
    website
    category
  }
}
`

const loginAdvertiser = gql`
mutation($email:String!, $password: String!){
  loginAdvertiser(email:$email, password:$password){
    email
    company
    website
    category
    token
  }
}
`

const allBaseReports = gql`
{
  allBaseReports{
    id
    location
    noOfReports
    userID{
      name
      id
      email
    }
    similar{
      id
      reportedAt
      reportedOn
      location
      userID{
        name
  			id
        email
      }
      address
    }
  }
}
`

const findUsingZipCode = gql`
query($zip:String!) {
  findUsingZipCode(zip: $zip) {
    id
    location
    reportedAt
    reportedOn
    similar{
      id
      reportedAt
      reportedOn
      location
      userID{
        name
  			id
        email
      }
      address
    }
  }
}
`

const isOnLine = gql`
query($encoded: [String]){
  isOnLine(encoded: $encoded)
}
`

const allAdvertisers = gql`
{
  allAdvertisers{
    id
    email
    company
    website
    coupons{
      id
      name
      amount
      validity
      assigned
      userID{
        email
        name
        id
      }
    }
    advertisments{
      id
      title
      link
      screentime
      outreach
      when
    }
  }
}
`

const addAdvertisment = gql`
mutation($title: String!, $link: String!, $image: String!, $when: String!, $advertiserID: ID!){
  addAdvertisment(title: $title, link: $link, image: $image, when: $when, advertiserID: $advertiserID){
    title
    link
    image
    when
  }
}
`

const allMyAds = gql`
query($token: String!){
  allMyAds(token: $token){
    title
    link
    image
    screentime
    when
    outreach
  }
}
`

const addCoupon = gql`
mutation($name: String!, $amount: String!, $validity: String!, $advertiserID: ID!){
  addCoupon(name: $name, amount: $amount, validity: $validity, advertiserID: $advertiserID){
    name
    amount
    validity
    assigned
    advertiserID{
      company
      email
      id
    }
    userID{
      name
      email
      id
    }
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
  decrypt,
  addAdvertiser,
  loginAdvertiser,
  decryptAdvertiser,
  allBaseReports,
  findUsingZipCode,
  isOnLine,
  allAdvertisers,
  addAdvertisment,
  allMyAds,
  addCoupon
};





