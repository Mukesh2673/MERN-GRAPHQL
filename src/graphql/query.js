// Example query in a separate file (e.g., queries.js)
import { gql } from '@apollo/client';

export const GET_PUBLIC_FILE = gql`
query PublicFiles {
    publicFiles {
        id
        fileName
        url
        uploadDate
        lastUsed
    }
}
`;
export const  ADD_PUBLIC_FILE=gql`
mutation createPublicFiles($fileName: String!,$url: String!,$uploadDate: DateTime!, $lastUsed: DateTime!) {
    createPublicFiles (fileName: $fileName,url: $url,uploadDate: $uploadDate, lastUsed: $lastUsed){
        fileName
        url
        uploadDate
        lastUsed
    }
}
`;
export const REMOVE_PUBLIC_FILE=gql`
mutation DeletePublicFiles($id: Int) {
    deletePublicFiles (id: $id){
       id
    }
}
`
export const REGISTER=gql`
mutation Register ($firstName: String,$lastName:String,$email:String,$phone:String,$password:String,$bio:String){
    register(firstName: $firstName,lastName:$lastName,email:$email,phone:$phone,password:$password,bio:$bio){
        firstName
        lastName
        email
        phone
        password
        bio
    }
}`

 export const LOGIN_MUTATION = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    error
  }
}
`;