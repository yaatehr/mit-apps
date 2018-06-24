import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from 'react';

//DOCS
//Use this template to make an online react component
/**
 * to use this you will need o
 */

 const message = `

 This example is querying the current model for users from the database.
Our backend uses express, sequlize, graphql and apollo.

 If you would like to learn more boaut the backend please contact Yaateh or Anurag.
 `;
export class OnlineComponent extends React.Component {
    render() {
        return (
            <Query
            query={gql`
              {
                users {
                     firstName,
                     lastName,
                     email,
                     userHash
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
        
              return (
                  <div>
                      <h3>Online component example</h3>
                      <p> 
                      </p>
                  {data.rates.map(({ firstName, lastName, email, userHash }) => (
                <div key={userHash}>
                  <p>{`Name: ${firstName}, ${lastName}`}</p>
                  <p>{`Email: ${email}`}</p>
                  <p>{`hashCode: ${userHash}`}</p>
                </div>
              ))};
              </div>
            );
            }}
          </Query>
        );
    }

}

export default OnlineComponent;
