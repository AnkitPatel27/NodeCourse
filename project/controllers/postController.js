// controllers/postController.js
const { Post, Like, Dislike } = require("../models/Post");
const sequelize = require("../config/database");

exports.createPost = async (req, res) => {
  try {
    const { title, desc, imageUrl } = req.body;

    // Check if the user is authenticated
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Create a new post
    const post = await Post.create({ title, desc, imageUrl, userId });

    res.status(201).json({ post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Check if the user is authenticated
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the post exists
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ where: { postId, userId } });
    if (existingLike) {
      // TODO 2nd ways to remove this column
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }

    // Create a new like
    await Like.create({ postId, userId });

    res.status(200).json({ message: "Post liked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.dislikePost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Check if the user is authenticated
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the post exists
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user has already liked the post
    const existingDislike = await Dislike.findOne({
      where: { postId, userId },
    });
    if (existingDislike) {
      // TODO 2nd ways to remove this column
      return res
        .status(400)
        .json({ message: "You have already Dislike this post" });
    }

    // Create a new like
    await Dislike.create({ postId, userId });

    res.status(200).json({ message: "Post disliked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, desc, imageUrl } = req.body;

    // Check if the user is authenticated
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the post exists and belongs to the user
    const post = await Post.findOne({ where: { id: postId, userId } });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }

    // Update the post
    post.title = title || post.title;
    post.desc = desc || post.desc;
    post.imageUrl = imageUrl || post.imageUrl;
    await post.save();

    res.status(200).json({ post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Check if the user is authenticated
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the post exists and belongs to the user
    const post = await Post.findOne({ where: { id: postId, userId } });
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post not found or unauthorized" });
    }

    // Delete the post and associated like and dislike entries
    await Like.destroy({ where: { postId } });
    await Dislike.destroy({ where: { postId } });
    await post.destroy();

    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    let posts = JSON.parse(
      JSON.stringify(
        await Post.findAll({
          attributes: ["id", "title", "desc"],
        })
      )
    );
    for (let i = 0; i < posts.length; i++) {
      const postId = posts[i].id;
      const countLikes = await Like.count({
        where: { postId: postId },
      });
      const countDislikes = await Dislike.count({
        where: { postId: postId },
      });
      posts[i].numLikes = countLikes;
      posts[i].numDisLikes = countDislikes;
    }
    // const posts = await Post.findAll({
    //   attributes: ["id", "title", "desc"],
    //   include: [
    //     {
    //       model: Like,
    //       attributes: [
    //         [sequelize.fn("COUNT", sequelize.col("Likes.postId")), "numLikes"],
    //       ],
    //       group: ["Post.id", "Likes.postId"],
    //     },
    //     {
    //       model: Dislike,
    //       attributes: [
    //         [
    //           sequelize.fn("COUNT", sequelize.col("Dislikes.postId")),
    //           "numDislikes",
    //         ],
    //       ],
    //       group: ["Post.id", "Likes.postId"],
    //     },
    //   ],
    //   group: ["Post.id"],
    // });

    res.status(200).json({ posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = JSON.parse(
      JSON.stringify(
        await Post.findOne({
          where: { id: postId },
        })
      )
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const countLikes = await Like.count({
      where: { postId: postId },
    });
    const countDislikes = await Dislike.count({
      where: { postId: postId },
    });
    post.numLikes = countLikes;
    post.numDisLikes = countDislikes;
    // const post = await Post.findOne({
    //   where: { id: postId },
    //   include: [
    //     {
    //       model: Like,
    //       attributes: [
    //         [sequelize.fn("COUNT", sequelize.col("Likes.postId")), "numLikes"],
    //       ],
    //       group: ["Post.id", "Likes.postId"],
    //     },
    //     {
    //       model: Dislike,
    //       attributes: [
    //         [
    //           sequelize.fn("COUNT", sequelize.col("Dislikes.postId")),
    //           "numDislikes",
    //         ],
    //       ],
    //       group: ["Post.id", "Likes.postId"],
    //     },
    //   ],
    //   group: ["Post.id"],
    // });

    res.status(200).json({ post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
