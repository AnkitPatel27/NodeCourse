const { Review } = require("../models/Review");
// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { postId, content } = req.body;
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;
    const review = await Review.create({ postId, userId, content });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get all reviews for a particular post
exports.getReviewsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const reviews = await Review.findAll({ where: { postId } });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the review exists and belongs to the user
    const review = await Review.findOne({ where: { id, userId } });
    console.log(review);
    if (!review) {
      return res
        .status(404)
        .json({ message: "Review not found or unauthorized" });
    }

    review.content = content || review.content;
    await review.save();
    res.status(200).json({ review });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.session.user.id;

    // Check if the review exists and belongs to the user
    const review = await Review.findOne({ where: { id, userId } });
    if (!review) {
      return res
        .status(404)
        .json({ message: "Review not found or unauthorized" });
    }
    await review.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
