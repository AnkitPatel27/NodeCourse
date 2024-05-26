# User Authentication API Endpoints

In this assignment, you will be building a User Authentication API using Node.js, Express, Sequelize, and MariaDB. The API should have the following functionality:

## Requirements

1. **User Signup**

   - **_Endpoint_**: `POST /api/auth/signup`
   - Create an API endpoint that allows users to sign up by providing their name, email, and password.
   - The email should be unique, and the password should be securely hashed using bcrypt before storing it in the database.
   - The response should include the newly created user object, excluding the password.

2. **User Login**

   - **_Endpoint_**: `POST /api/auth/login`
   - Create an API endpoint that allows users to log in by providing their email and password.
   - Validate the provided credentials against the user data stored in the database.
   - If the credentials are valid, create a new session for the user and set a session cookie in the response.
   - The response should indicate a successful login.

3. **Session and Cookie Management**

   - Implement session management using the `express-session` middleware.
   - Configure the session options, such as the secret key, session expiration time, and other relevant settings.
   - Use the `cookie-parser` middleware to parse and handle cookies in the request and response.
   - After a successful login, store the user's information (e.g., id, name, email) in the session object.

4. **API Documentation**

   - Use Swagger (OpenAPI) to document your API endpoints, including the request and response structures, and possible response codes.
   - Integrate the Swagger UI into your application, allowing users to explore and test your API interactively.

5. **Database Integration**

   - Set up a MariaDB database and configure the Sequelize ORM to interact with it.
   - Define a User model in Sequelize to represent the user data stored in the database.

6. **Dependencies**
   - Use the following dependencies in your project:
     - `express`: Web application framework for Node.js
     - `sequelize`: Object-Relational Mapping (ORM) library for Node.js
     - `mariadb`: MariaDB driver for Sequelize
     - `bcrypt`: Library for hashing passwords
     - `express-session`: Middleware for session management
     - `cookie-parser`: Middleware for parsing cookies
     - `swagger-ui-express`: Swagger UI for documenting and testing APIs
     - `yamljs`: YAML parser for loading Swagger documentation

## Bonus Tasks (Optional)

- Implement input validation for the API request bodies using a library like `express-validator` or `joi`.
- Implement role-based access control (RBAC) to restrict access to certain API endpoints based on user roles.

# DataBase Model

## User

The `User` model represents a user in the social media application. It has the following fields:

- `id` (integer, primary key): A unique identifier for the post.
- `name` (string, required): The name of the user.
- `email` (string, required): The email of the user.
- `password` (string, required): The password of the user.
- `createdAt` (timestamp): The timestamp when the post was created.
- `updatedAt` (timestamp): The timestamp when the post was last updated.
