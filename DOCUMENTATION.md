# HNGx - Stage Two Task Documentation

A simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice.

### https://hngx-crud-api-ygj4.onrender.com/api

<br/>

# API Endpoints

## Create a New Person

- **Endpoint**: `/api` (POST)
- **Description**: This endpoint allows you to create a new person by providing a JSON payload with the person's name.
- **Request Body**:
  - `name` (string): The name of the person to be created.
- **Responses**:

  - `201 Created`: The person was successfully created.
    - JSON Response: `{"_id": "6503d66581dcc45f3f7bf99c", "name": "Mark Essien", "__v": 0 },`
  - `400 Bad Request`: If the provided name is not provided or is invalid.
    - JSON Response: `{'error': 'name is required'}`

## Retrieve Person Information

- **Endpoint**: `/api/:id` (GET)
- **Description**: This endpoint allows you to retrieve information about a person by providing their unique identifier (`id`).
- **Responses**:

  - `200 OK`: The person was found, and their information is returned.
    - JSON Response: `{"_id": "6503d66581dcc45f3f7bf99c", "name": "Mark Essien", "__v": 0 },`
  - `404 Not Found`: If the person with the provided `id` does not exist.
    - JSON Response: `{'error': 'Person not found'}`

## Update Person Name

- **Endpoint**: `/api/:id` (PUT)
- **Description**: This endpoint allows you to update the name of an existing person by providing their unique identifier (`id`) and a new name.
- **Request Body**:
  - `name` (string): The new name for the person.
- **Responses**:

  - `200 OK`: The person's name was successfully updated.
    - JSON Response: `{'message': 'Person updated successfully'}`
  - `404 Not Found`: If the person with the provided `id` does not exist.
    - JSON Response: `{'error': 'Person not found'}`

## Delete a Person

- **Endpoint**: `/api/:id` (DELETE)
- **Description**: This endpoint allows you to delete an existing person by providing their unique identifier (`id`).
- **Responses**:

  - `200 OK`: The person was successfully deleted.
    - JSON Response: `{'message': 'Person deleted successfully'}`
  - `404 Not Found`: If the person with the provided `id` does not exist.
    - JSON Response: `{'error': 'Person not found'}`

## Retrieve All Persons

- **Endpoint**: `/api` (GET)
- **Description**: This endpoint allows you to retrieve a list of all users in the database.
- **Responses**:
  - `200 OK`: The list of users is returned.
    - JSON Response: `[{"_id": "6503d66581dcc45f3f7bf99c", "name": "Mark Essien", "__v": 0 }, ...]`
  - `404 Not Found`: If the person with the provided `id` does not exist.
    - JSON Response: `{'error': 'No persons found'}`

<br/><br/>

# Setup and usage

### 1. Clone repo:

```
git clone
```

### 2. Install dependencies in package.json:

```
npm install [dependecies]
```

### 3. Create .env file and set db server:

```
MONGODB_CONNECTION = "mongodb://localhost:27017/<database>"
```

### 4. Run command below to start:

```
npm run dev
```

### 5. Navigate to <http://localhost:PORT> to view the project.
