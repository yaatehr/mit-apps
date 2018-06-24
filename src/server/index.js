/* eslint-disable import/default */

import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import cors from 'cors';
//TODO   bodyParser.json() for apollo?


console.log('Server is running  ');

const APP_PORT = 8080;

const app = Express();

app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    // cacheControl: true,
    graphiql: true
}));

app.use(cors());


app.listen(APP_PORT, () => {
    console.log('DB Listening on port 8080 ');
});


// const engine = new ApolloEngine({
//     apiKey: process.env.ENGINE_API_KEY
//   });
  
//   // Start the server
//   engine.listen({
//     port: APP_PORT,
//     expressApp: app
//   }, () => {
//     console.log(`Go to http://localhost:${APP_PORT}/graphiql to run queries!`);
//   });




  import gql from "graphql-tag";
  import client from "./apollo";

  setTimeout(() => {
    client
    .query({
      query: gql`
        {
          users{
            firstName,
            lastName,
            email,
            userHash
          }
        }
      `
    })
    .then(result => console.log(result));
  }, 10000);

