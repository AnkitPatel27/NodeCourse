# Review API EndPoints

## Overview

Your task is to create an API for managing reviews of posts. The API will allow users to create, read, update, and delete reviews. You will implement the necessary controllers and routes, and document the API using Swagger.

## Objectives

- Define a `Review` model using Sequelize.
- Implement the following API endpoints:
  - `POST /reviews`: Create a new review
  - `GET /posts/{postId}/reviews`: Get all reviews for a particular post
  - `GET /reviews/{id}`: Get a single review by ID
  - `PUT /reviews/{id}`: Update a review by ID
  - `DELETE /reviews/{id}`: Delete a review by ID
- Document the API endpoints using Swagger in a `swagger.yaml` file.

## API Endpoints

### Create a Review

Create an API endpoint that allows users to create a review by providing the `postId`, `userId`, and `content`.

- **Authorization**: The user must be logged in to create a review. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- The `postId` should reference an existing post.
- The `content` should be a text field that contains the review text.
- The response should include the newly created review object.

### Get All Reviews for a Post

Create an API endpoint that retrieves all reviews for a particular post using the `postId`.

- The `postId` should be provided as a URL parameter.
- The response should include a list of review objects associated with the specified post.

### Get a Single Review by ID

Create an API endpoint that retrieves a single review by its `id`.

- The `id` should be provided as a URL parameter.
- If the review exists, the response should include the review object.
- If the review does not exist, the response should indicate that the review was not found.

### Update a Review by ID

Create an API endpoint that allows users to update a review by providing the `id` of the review and the new `content`.

- **Authorization**: The user must be logged in to update a review. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The review should only be updated if it belongs to the logged-in user. If the review does not exist or the user is not the owner of the review, the response should return a `404 Not Found` status with a message indicating that the review was not found or the user is unauthorized.
- The `id` should be provided as a URL parameter.
- The `content` should be a text field with the updated review text.
- If the review exists, the response should include the updated review object.
- If the review does not exist, the response should indicate that the review was not found.

### Delete a Review by ID

Create an API endpoint that allows users to delete a review by its `id`.

- **Authorization**: The user must be logged in to delete a review. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The review should only be deleted if it belongs to the logged-in user. If the review does not exist or the user is not the owner of the review, the response should return a `404 Not Found` status with a message indicating that the review was not found or the user is unauthorized.
- The `id` should be provided as a URL parameter.
- If the review exists, it should be deleted from the database.
- If the review does not exist, the response should indicate that the review was not found.
- The response should indicate successful deletion of the review.

# DataBase Model

## Review

The `Review` model represents a user Reviewing a post. It has the following fields:

- `id` (integer, primary key): A unique identifier for the Reviews.
- `postId` (integer, required): The ID of the post that was Reviewd, referencing the `Posts` table.
- `userId` (integer, required): The ID of the user who Reviewd the post, referencing the `Users` table.
- `createdAt` (timestamp): The timestamp when the post was created.
- `updatedAt` (timestamp): The timestamp when the post was last updated.
