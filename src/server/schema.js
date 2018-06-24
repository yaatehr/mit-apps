import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLScalarType, GraphQLSchema} from 'graphql';
import Database from './database';


//graphQL Schema
/**
 * these are known as Data Models or Data Transfer Objects
 * The resolve method is unpackaging value from the the sequlize object connected t the  
 */
const User = new GraphQLObjectType({
    name: 'User',
    description: 'An App Store User',
    fields: () => {
        return {

            // id: {
            //     type: new GraphQLInt,
            //     resolve(user) {
            //         return user.id;
            //     }
            // },

            firstName: {
                type: new GraphQLString,
                resolve(user) {
                    return user.firstName;
                }
            },
            lastName: {
                type: new GraphQLString,
                resolve(user) {
                    return user.lastName;
                }
            },
            email: {
                type: new GraphQLString,
                resolve(user) {
                    return user.email;
                }
            },
            userHash: {
                type: new GraphQLID,
                resolve(user) {
                    return user.userHash;
                }
            },

            // appHashes: {
            //     type: new GraphQLList(GraphQLID),
            //     resolve(user) {
            //         return user.appHashes;
            //     }
            // },
            // reviewHashes: {
            //     type: new GraphQLList(GraphQLID),
            //     resolve(user) {
            //         return user.reviewHashes;
            //     }
            // },
        };
    }
});


const Review = new GraphQLObjectType({ 
    name: 'Review',
    description: ' A review on an App',
    fields: () => {
        return {

            // id: {
            //     type: new GraphQLInt,
            //     resolve(review) {
            //         return review.id;
            //     }
            // },

            title: {
                type: new GraphQLString,
                resolve(review) {
                    return review.title;
                }
            },

            content: {
                type: new GraphQLString,
                resolve(review) {
                    return review.content;
                }
            },

            authorName: {
                type: new GraphQLString,
                resolve(review) {
                    return review.authorName;
                }
            },

            rating: {
                type: new GraphQLScalarType,
                resolve(review) {
                    return review.rating;
                }
            },

            reviewHash: {
                type: new GraphQLID,
                resolve(review) {
                    return review.reviewHash;
                }
            },

            userHash: {
                type: new GraphQLList(GraphQLID),
                resolve(review) {
                    return review.userHash;
                }
            }
        };
    }
});

const App = new GraphQLObjectType({ 
    name: 'App',
    description: ' An App entry',
    fields: () => {
        return {

            // id: {
            //     type: new GraphQLInt,
            //     resolve(app) {
            //         return app.id;
            //     }
            // },

            firstName: {
                type: new GraphQLString,
                resolve(app) {
                    return app.firstName;
                }
            },

            lastName: {
                type: new GraphQLString,
                resolve(app) {
                    return app.lastName;
                }
            },

            email: {
                type: new GraphQLString,
                resolve(app) {
                    return app.email;
                }
            },

            appHash: {
                type: new GraphQLID,
                resolve(app) {
                    return app.appHash;
                }
            },

            reviewHashes: {
                type: new GraphQLList(GraphQLID),
                resolve(app) {
                    return app.reviewHashes;
                }
            },
        };
    }
});


const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is a root query',
    fields: () => {
        return {
            entity: {
                type: new GraphQLList(User) | new GraphQLList(App) | new GraphQLList(Review),
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    keyword: {
                        type: GraphQLString
                    }
                }
            }
        };
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;
