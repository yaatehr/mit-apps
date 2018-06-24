import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
console.log('Server is running  ');

const APP_PORT = 8080;

const app = Express();

app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));
console.log('Server is running  ');


app.listen(APP_PORT, () => {
    console.log('DB Listening on port 8080 ');
});

