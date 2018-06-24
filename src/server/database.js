import Sequelize from 'sequelize';
import Faker from 'faker';

const Conn = new Sequelize(
    'AppStoreDB',
    'UATECH',
    'UATECH',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);


//Schema
const App = Conn.define('app', {
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reviews: {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    appHash: {
        type: Sequelize.STRING,
        allowNull: false
    },
});


const Review = Conn.define('review', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    authorName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reviewHash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userHash: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const User = Conn.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userHash: {
        type: Sequelize.STRING,
        allowNull: false
    },

    appHashes: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING })
    },
    reviewHashes: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING })
    }

});

// RELATIONSHIPS TODO: Mock out relationships between DB Schema and recreate this structure.
//Note: incomplete
User.hasMany(Review, {foreignKey: 'reviewHash', targetKey: 'userHash'});
User.hasMany(App, {targetKey: 'appHash'} );
App.belongsToMany(User)
App.hasMany(Review);



//add a bunch of phony entitiies to the database
Conn.sync({ force: true }).then(() => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach( _ => {
        return User.create({
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email(),
            userHash: Faker.random.uuid()
        }).then(person => {
        return person.createApp({
            author: Faker.name.firstName() + " " + Faker.name.lastName(),
            name: Faker.company.companyName(),
            type: Faker.random.word(['app', 'official']),
            appHash: Faker.random.uuid()
        }).then( app => {
            app.createReview( {
                    title: Faker.internet.color(),
                    content: Faker.name.jobDescriptor(),
                    rating: Faker.random.number(5),
                    authorName: Faker.name.firstName() + " " + Faker.name.lastName(),
                    reviewHash: Faker.random.uuid(),
                    userHash: person.userHash
            });
        });
        });
    });

    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach( _ => {
    //     return Review.create({
    //         title: Faker.name.firstName(),
    //         content: Faker.name.lastName(),
    //         rating: Faker.random.number(5),
    //         authorName: Faker.name.firstName() + " " + Faker.name.lastName(),
    //         reviewHash: Faker.random.uuid()
    //     });
    // });

    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach( _ => {
    //     return App.create({
    //         author: Faker.name.firstName() + " " + Faker.name.lastName(),
    //         name: Faker.company.companyName(),
    //         type: Faker.random.word(['app', 'official']),
    //         appHash: Faker.random.uuid()
    //     });
    // });
});

export default Conn;


Conn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });