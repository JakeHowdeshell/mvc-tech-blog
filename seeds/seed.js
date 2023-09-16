const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const blogPost = require('./blogPost.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(blogPost)

  process.exit(0);
};

seedDatabase();