import { gql } from 'apollo-boost';

const users = gql`
{
  users{
    name
    email
    address
    dob
    profile
    karma
  	reports{
      id
      image
      location
    }
    baseReports{
      id
      image
      location
      address
      noOfReports
    }
    coupons{
      id
      name
      amount
      validity
      advertiserID{
        company
        id
        email
        category
      }
    }
  }
}`

const toggleActivation = gql`
mutation($id: ID!, $type: String!){
  toggleActivation(id: $id, type: $type)
}
`

const allContractors = gql`
{
  allContractors{
    id
    email
    address
    name
    isVerified
    bidsMade{
      id
      amount
      tenderId{
        id
        source
        address
        destination
        isAssigned
        isCompleted
        nameOfWork
        amount
        contractorId{
          id
          email
        }
        bids{
          id
          amount
          bidedAt
          bidedOn
        }
      }
      bidedAt
      bidedOn
    }
    profile
    
  }
}
`

const addTender = gql`
mutation($endDate: String!, $address: String!, $source: String!, $destination: String!, $baseReports: [ID]!, $amount: String!, $nameOfWork: String!, $encoded: [encCoordsInput]!){
  addTender(endDate: $endDate, address: $address, source: $source, destination: $destination, baseReports: $baseReports, amount: $amount, nameOfWork: $nameOfWork, encoded: $encoded){
    id
    address
    source
    destination
    amount
    nameOfWork
    isAssigned
    isCompleted
    encoded{
      lat
      lng
    }
  }
}
`

const addUser = gql`
mutation($name: String!, $email: String!, $password: String!, $dob: String!, $address: String!, $profile: String){
    addUser(name: $name, email: $email, password: $password, dob: $dob, address: $address, profile: $profile){
      name
      email
      password
    }
}
`
const addContractor = gql`
mutation($name: String!, $email: String!, $password: String!, $address: String!, $profile: String!){
    addContractor(name: $name, email: $email, password: $password, address: $address, profile: $profile){
      name
      email
    }
}
`

const loginQuery = gql`
  mutation($email:String!, $password: String!){
    login(email:$email, password:$password){
      name
      email
      dob
      token
    }
  }
`;

const loginContractor = gql`
  mutation($email:String!, $password: String!){
    loginContractor(email:$email, password:$password){
      name
      email
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
const addFeedbackReport = gql`
mutation($image: String!, $address: String!, $location: String!, $reportedAt: String!, $reportedOn: String!, $userID: ID!, $noOfReports: Int!){
  addFeedbackReport(image: $image, address: $address, location: $location, reportedAt: $reportedAt, reportedOn: $reportedOn, userID: $userID, noOfReports: $noOfReports){
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
      id
      location
      address
      reportedAt
      reportedOn
    }
    coupons{
      id
      name
      amount
      validity
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
      assigned
      userID{
        name
      }
    }
  }
}
`

const decryptContractor = gql`
query($token: String){
  decryptContractor(token: $token){
    id
    email
    address
    name
    isVerified
    bidsMade{
      id
      amount
      bidedAt
      bidedOn
      tenderId{
        id
        address
        source
        destination
        isAssigned
      	isCompleted
        encoded{
          lat
          lng
        }
      }
    }
    profile    
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
    address
    reportedAt
    reportedOn
    image
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
  isOnLine(encoded: $encoded){
    latitude
    longitude
  }
}
`

const isOnLinev2 = gql`
query($encoded: [String]){
  isOnLinev2(encoded: $encoded)
}
`

const allAdvertisers = gql`
{
  allAdvertisers{
    id
    email
    company
    website
    category
    isVerified
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
      image
    }
  }
}
`

const allReports = gql`
{
  allReports{
    id
    image
    address
    location
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

const deleteThisAdd = gql`
mutation($id: ID!, $advertiserID: ID!){
  deleteThisAdd(id: $id, advertiserID: $advertiserID)
}
`

const getRandomAd = gql`
{
  getRandomAd{
    id
    title
    link
    image
    screentime
    when
    outreach
    advertiserID{
      id
      email
      company
    }
  }
}
`

const allMyAds = gql`
query($token: String!){
  allMyAds(token: $token){
    id
    title
    link
    image
    screentime
    when
    outreach
    advertiserID{
      id
      email
    }
  }
}
`

const addCoupon = gql`
mutation($coupons: [CouponsInput]!, $advertiserID: ID!){
  addCoupon(coupons: $coupons, advertiserID: $advertiserID)
}
`

const AddAccReport = gql`
mutation($coords: [InputAccReport]!){
  AddAccReport(coords: $coords)
}
`

const updateAdd = gql`
mutation($id: ID!, $screentime: Int!){
  updateAdd(id: $id, screentime: $screentime){
    id
    title
    link
    image
    screentime
    when
    outreach
    advertiserID{
      id
      email
    }
  }
}
`

const adminLogin = gql`
mutation($email: String!, $password: String!){
  adminLogin(email: $email, password: $password)
}
`;

const allMyReports = gql`
query($token: String!){
  allMyReports(token: $token){
    id
    reportedAt
    reportedOn
    address
    baseParent{
      noOfReports
    }
  }
}
`

const allFeedbackReports = gql`
{
  allFeedbackReports{
    id
    image
    location
    address
    noOfReports
    userID{
      name
      email
    }
  }
}
`

const getSpecificReport = gql`
query($id: String!){
  getSpecificReport(id: $id){
    id
    image
    address
    location
    reportedAt
    reportedOn
    resolved
    noOfReports
    userID{
      id
      name
      profile
      email
      karma
    }
    similar{
      id
      image
      location
      address
      reportedAt
      reportedOn
      userID{
        id
        name
        profile
        email
        karma
      }
    }
  }
}
`;

const availableTenders = gql`
query($id: ID!){
  availableTenders(id: $id){
    id
    address
    source
    destination
    isAssigned
    isCompleted
    endDate
    amount
    nameOfWork
    encoded{
      lat
      lng
    }
    baseReports{
      id
      image
      address
      location
      reportedAt
      reportedOn
      noOfReports
      userID{
        id
        name
        profile
        email
        address
        karma
      }
      similar{
        id
        address
        location
        image
        reportedAt
        reportedOn
        userID{
          id
          name
          profile
          email
          address
          karma
        }
      }
    }
    contractorId{
      name
      id
      email
    }
    bids{
      id
      amount
      bidedAt
      bidedOn
      contractorId{
        name
        id
        email
        isVerified
        
      }
    }
  }
}
`
const pastTenders = gql`
query($id: ID!){
  availableTenders(id: $id){
    id
    address
    source
    destination
    isAssigned
    isCompleted
    endDate
    amount
    nameOfWork
    encoded{
      lat
      lng
    }
    baseReports{
      id
      image
      address
      location
      reportedAt
      reportedOn
      noOfReports
      userID{
        id
        name
        profile
        email
        address
        karma
      }
      similar{
        id
        address
        location
        image
        reportedAt
        reportedOn
        userID{
          id
          name
          profile
          email
          address
          karma
        }
      }
    }
    contractorId{
      name
      id
      email
    }
    bids{
      id
      amount
      bidedAt
      bidedOn
      contractorId{
        name
        id
        email
        isVerified
        
      }
    }
  }
}
`

const myTenders = gql`
query($id: ID!){
  myTenders(id: $id){
    id
    address
    source
    destination
    isAssigned
    isCompleted
    endDate
    amount
    nameOfWork
    encoded{
      lat
      lng
    }
    baseReports{
      id
      image
      address
      location
      reportedAt
      reportedOn
      noOfReports
      userID{
        id
        name
        profile
        email
        address
        karma
      }
      similar{
        id
        address
        location
        image
        reportedAt
        reportedOn
        userID{
          id
          name
          profile
          email
          address
          karma
        }
      }
    }
    contractorId{
      name
      id
      email
    }
    bids{
      id
      amount
      bidedAt
      bidedOn
      contractorId{
        name
        id
        email
        isVerified
        
      }
    }
  }
}
`
const allTenders = gql`
{
  allTenders{
    id
    address
    source
    destination
    isAssigned
    isCompleted
    endDate
    amount
    nameOfWork
    encoded{
      lat
      lng
    }
    baseReports{
      id
      image
      address
      location
      reportedAt
      reportedOn
      noOfReports
      userID{
        id
        name
        profile
        email
        address
        karma
      }
      similar{
        id
        address
        location
        image
        reportedAt
        reportedOn
        userID{
          id
          name
          profile
          email
          address
          karma
        }
      }
    }
    contractorId{
      name
      id
      email
    }
    bids{
      id
      amount
      bidedAt
      bidedOn
      contractorId{
        name
        id
        email
        isVerified
        
      }
    }
  }
}
`
const getSpecificTender = gql`
query($id: ID!){
  getSpecificTender(id: $id){
    id
    address
    source
    destination
    isAssigned
    isCompleted
    endDate
    amount
    encoded{
      lat
      lng
    }
    nameOfWork
    baseReports{
      id
      image
      address
      location
      reportedAt
      reportedOn
      noOfReports
      userID{
        id
        name
        profile
        email
        address
        karma
      }
      similar{
        id
        address
        location
        image
        reportedAt
        reportedOn
        userID{
          id
          name
          profile
          email
          address
          karma
        }
      }
    }
    contractorId{
      name
      id
      email
      profile
      isVerified
      bidsMade{
        id
        amount
      }
    }
    bids{
      id
      amount
      bidedAt
      bidedOn
      contractorId{
        name
        id
        email
        isVerified
        profile
        bidsMade{
          id
          amount
        }
      }
    }
  }
}
`

const addBids = gql`
mutation($amount: String!, $bidedAt: String!, $bidedOn: String!, $contractorId: ID!, $tenderId: ID!){
  addBids(amount: $amount, bidedAt: $bidedAt, bidedOn: $bidedOn, contractorId: $contractorId, tenderId: $tenderId){
    id
    amount
    bidedAt
    bidedOn
    contractorId{
      id
      email
      address
      name
      isVerified
      profile
    }
    tenderId{
      id
      address
      source
      destination
      amount
      encoded{
        lat
        lng
      }
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
  addCoupon,
  AddAccReport,
  deleteThisAdd,
  getRandomAd,
  updateAdd,
  addFeedbackReport,
  allMyReports,
  adminLogin,
  allReports,
  allFeedbackReports,
  loginContractor,
  addContractor,
  getSpecificReport,
  toggleActivation,
  allContractors,
  addTender,
  isOnLinev2,
  availableTenders,
  myTenders,
  decryptContractor,
  getSpecificTender,
  pastTenders,
  allTenders,
  addBids
};





