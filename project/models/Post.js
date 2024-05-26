// models/Post.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { User } = require("../models/User");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Assuming you have a 'Users' model
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

// models/Like.js
const Like = sequelize.define("Like", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Posts",
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

// models/Dislike.js
const Dislike = sequelize.define("Dislike", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Posts",
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

//Define the association to post,likes and dislikes
Post.belongsToMany(User, {
  through: Like,
  foreignKey: "postId",
  otherKey: "userId",
});

User.belongsToMany(Post, {
  through: Like,
  foreignKey: "userId",
  otherKey: "postId",
});

Post.hasMany(Like, {
  foreignKey: "postId",
});

Like.belongsTo(Post, {
  foreignKey: "postId",
});

User.hasMany(Like, {
  foreignKey: "userId",
});

Like.belongsTo(User, {
  foreignKey: "userId",
});

Post.hasMany(Dislike, {
  foreignKey: "postId",
});

Dislike.belongsTo(Post, {
  foreignKey: "postId",
});

User.hasMany(Dislike, {
  foreignKey: "userId",
});

Dislike.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { Post, Like, Dislike };
