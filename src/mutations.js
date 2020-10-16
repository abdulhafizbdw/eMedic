import { gql } from "apollo-boost";

export const signupMutation = gql`
  mutation Signup(
    $email: String!,
    $password: String!

  ) {
    userSignup(
      email: $email,
      password: $password

    ) {
      ok
      email
    }
}
`;

export const loginMutation = gql`
  mutation TokenAuth(
    $email: String!,
    $password: String!

  ) {
    tokenAuth(
      email: $email,
      password: $password

    ) {
      token
    }
}
`;


export const addEditService = gql`
  mutation AddEditService(
    $active: Boolean!,
    $description: String!,
    $id: Int,
    $isAppointment: Boolean!,
    $serviceType: String!,
    $title: String!
  ) {
    addEditService(
      active: $active,
      description: $description,
      id: $id,
      isAppointment: $isAppointment,
      serviceType: $serviceType,
      title: $title,
    ) {
      message
      details {
        description
        id
        modifiedAt
      }
    }
  }
`;


export const addEditServiceProvider = gql`
mutation AddEditServiceProvider(
  $regNo: String!,
  $address: String!,
  $id: Int,
  $name: String!,
  $providerType: String!,
  $phoneNumber: String!,
  $state: String!,
  $shortName: String
) {
  addEditProvider(
    address: $address,
    id: $id,
    name: $name,
    providerType: $providerType,
    phoneNumber: $phoneNumber,
    shortName: $shortName,
    state: $state,
    regNo: $regNo
  ) {
    provider {
      address
      id
      modifiedAt
    }
  }
}
`;


export const addEditProfessional = gql`
mutation CreateEditProfessional(
  $address: String!
  $availabilityTime: String
  $country: String!
  $dateOfBirth: String
  $firstName: String!
  $gender: String!
  $id: Int
  $lastName: String!
  $phoneNumber: String!
  $professionalType: String!
  $professionalYears: Int
  $state: String!
) {
  addEditProfessional(
    address: $address
    availabilityTime: $availabilityTime
    country: $country
    dateOfBirth: $dateOfBirth
    firstName: $firstName
    gender: $gender
    id: $id
    lastName: $lastName
    phoneNumber: $phoneNumber
    professionalType: $professionalType
    professionalYears: $professionalYears
    state: $state
  ) {
    details {
      firstName
      id
      lastName
    }
  }
}
`;

export const addEditPersonal = gql`
mutation AddEditPersonal(
  $address: String!
  $bloodGroup: String!
  $dateOfBirth: String!
  $disabilities: String
  $firstName: String!
  $genotype: String!
  $id: Int
  $lastName: String!
  $maritalStatus: String
  $medicalIssues: String
  $nokAddress: String
  $nokPhoneNumber: String
  $orgId: Int
  $phoneNumber: String
  $weight: String
  $gender: String

) {
  addEditPersonal(
    address: $address
    bloodGroup: $bloodGroup
    dateOfBirth: $dateOfBirth
    disabilities: $disabilities
    firstName: $firstName
    genotype: $genotype
    id: $id
    lastName: $lastName
    maritalStatus: $maritalStatus
    medicalIssues: $medicalIssues
    nokAddress: $nokAddress
    nokPhoneNumber: $nokPhoneNumber
    orgId: $orgId
    phoneNumber: $phoneNumber
    weight: $weight
    gender: $gender
  ) {
    details {
      firstName
      lastName
    }
  }
}
`;


export  const addEditOrganization = gql`
  mutation AddEditOrganization(
    $address: String!
    $country: String!
    $id: Int
    $name: String!
    $orgType: String!
    $phoneNumber: String!
    $regNumber: String!
    $totalStaff: Int
    $website: String
  ){
    addEditOrganization(
      address: $address
      country: $country
      id: $id
      name: $name
      orgType: $orgType
      phoneNumber: $phoneNumber
      regNumber: $regNumber
      totalStaff: $totalStaff
      website: $website
    ) {
      message
      details {
        name
        address
      }
    }
  }
`;
