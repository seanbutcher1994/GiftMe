const sequelize = require('../config/connection');
const { User, Project} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const Post = require('../models/post');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();