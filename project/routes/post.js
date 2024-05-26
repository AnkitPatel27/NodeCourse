const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const reviewController = require('../controllers/reviewController');

router.post('/', postController.createPost);
router.post('/:postId/like', postController.likePost);
router.post('/:postId/dislike', postController.dislikePost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

router.get('/:postId/reviews', reviewController.getReviewsByPost);

module.exports = router;