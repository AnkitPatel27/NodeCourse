const { Post } = require("./Post");
const { User } = require("./User");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Review = sequelize.define(
  "Review",
  {
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
      onDelete: "CASCADE",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
// In Post model file
Post.hasMany(Review, { foreignKey: "postId", onDelete: "CASCADE" });

// In User model file
User.hasMany(Review, { foreignKey: "userId", onDelete: "CASCADE" });
Review.belongsTo(User, { foreignKey: "userId" });
Review.belongsTo(Post, { foreignKey: "postId" });

module.exports = { Review };
