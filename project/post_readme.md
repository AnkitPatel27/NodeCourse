# Posts API Endpoints

## Create a Post

- **Endpoint**: `POST /api/posts`
- **Description**: Create a new post.
- **Authorization**: The user must be logged in to create a post. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Request Body**:
  - `title` (string, required): The title of the post.
  - `desc` (string, required): The description of the post.
  - `imageUrl` (string, optional): The URL of the image associated with the post.
- **Responses**:
  - `201 Created`: Returns the newly created post object.
  - `400 Bad Request`: Returned if the request body is invalid or missing required fields.
  - `401 Unauthorized`: Returned if the user is not authenticated.

## Get All Posts

- **Endpoint**: `GET /api/posts`
- **Description**: Retrieve all posts with their title, id, desc, and the number of likes and dislikes.
- **Responses**:
  - `200 OK`: Returns an array of post objects with the following fields:
    - `id` (integer): The unique identifier of the post.
    - `title` (string): The title of the post.
    - `desc` (string): The description or content of the post.
    - `numLikes` (integer): The number of likes for the post.
    - `numDislikes` (integer): The number of dislikes for the post.
  - `401 Unauthorized`: Returned if the user is not authenticated.

## Like a Post

- **Endpoint**: `POST /api/posts/:postId/like`
- **Description**: Like a post.
- **Authorization**: The user must be logged in to like a post. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The post should only be liked if it belongs to the logged-in user. If the post does not exist or the user is not the owner of the post, the response should return a `404 Not Found` status with a message indicating that the post was not found or the user is unauthorized.
- **Path Parameters**:
  - `postId` (integer, required): The ID of the post to like.
- **Responses**:
  - `200 OK`: Returned when the post is successfully liked.
  - `400 Bad Request`: Returned if the user has already liked the post.
  - `401 Unauthorized`: Returned if the user is not authenticated.
  - `404 Not Found`: Returned if the post with the specified ID is not found.

## Dislike a Post

- **Endpoint**: `POST /api/posts/:postId/dislike`
- **Description**: Dislike a post.
- **Authorization**: The user must be logged in to dislike a post. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The post should only be disliked if it belongs to the logged-in user. If the post does not exist or the user is not the owner of the post, the response should return a `404 Not Found` status with a message indicating that the post was not found or the user is unauthorized.
- **Path Parameters**:
  - `postId` (integer, required): The ID of the post to dislike.
- **Responses**:
  - `200 OK`: Returned when the post is successfully disliked.
  - `400 Bad Request`: Returned if the user has already disliked the post.
  - `401 Unauthorized`: Returned if the user is not authenticated.
  - `404 Not Found`: Returned if the post with the specified ID is not found.

## Update a Post

- **Endpoint**: `PUT /api/posts/:postId`
- **Description**: Update an existing post by its ID.
- **Authorization**: The user must be logged in to update a post. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The post should only be updated if it belongs to the logged-in user. If the post does not exist or the user is not the owner of the post, the response should return a `404 Not Found` status with a message indicating that the post was not found or the user is unauthorized.
- **Path Parameters**:
  - `postId` (integer, required): The ID of the post to update.
- **Request Body**:
  - `title` (string, optional): The new title for the post.
  - `desc` (string, optional): The new description for the post.
  - `imageUrl` (string, optional): The new image URL for the post.
- **Responses**:
  - `200 OK`: Returns the updated post object.
  - `400 Bad Request`: Returned if the request body is invalid.
  - `401 Unauthorized`: Returned if the user is not authenticated or not authorized to update the post.
  - `404 Not Found`: Returned if the post with the specified ID is not found.
  - `500 Internal Server Error`: Returned if an unexpected error occurs on the server.

## Delete a Post

- **Endpoint**: `DELETE /api/posts/:postId`
- **Description**: Delete an existing post by its ID, and delete the associated like and dislike entries.
- **Authorization**: The user must be logged in to delete a post. If the user is not logged in, the response should return a `401 Unauthorized` status with a message indicating that the user is unauthorized.
- **Ownership Check**: The post should only be deleted if it belongs to the logged-in user. If the post does not exist or the user is not the owner of the post, the response should return a `404 Not Found` status with a message indicating that the post was not found or the user is unauthorized.
- **Path Parameters**:
  - `postId` (integer, required): The ID of the post to delete.
- **Responses**:
  - `204 No Content`: Returned if the post is successfully deleted, along with its associated like and dislike entries.
  - `401 Unauthorized`: Returned if the user is not authenticated or not authorized to delete the post.
  - `404 Not Found`: Returned if the post with the specified ID is not found.
  - `500 Internal Server Error`: Returned if an unexpected error occurs on the server.

# Database Models

## Post

The `Post` model represents a user's post in the social media application. It has the following fields:

- `id` (integer, primary key): A unique identifier for the post.
- `title` (string, required): The title of the post.
- `desc` (string, required): The description or content of the post.
- `imageUrl` (string, optional): The URL of the image associated with the post.
- `userId` (integer, required): The ID of the user who created the post, referencing the `Users` table.
- `createdAt` (timestamp): The timestamp when the post was created.
- `updatedAt` (timestamp): The timestamp when the post was last updated.

## Like

The `Like` model represents a user liking a post. It has the following fields:

- `id` (integer, primary key): A unique identifier for the likes.
- `postId` (integer, required): The ID of the post that was liked, referencing the `Posts` table.
- `userId` (integer, required): The ID of the user who liked the post, referencing the `Users` table.
- `createdAt` (timestamp): The timestamp when the post was created.
- `updatedAt` (timestamp): The timestamp when the post was last updated.

## Dislike

The `Dislike` model represents a user disliking a post. It has the following fields:

- `id` (integer, primary key): A unique identifier for the dislikes.
- `postId` (integer, required): The ID of the post that was disliked, referencing the `Posts` table.
- `userId` (integer, required): The ID of the user who disliked the post, referencing the `Users` table.
- `createdAt` (timestamp): The timestamp when the post was created.
- `updatedAt` (timestamp): The timestamp when the post was last updated.
