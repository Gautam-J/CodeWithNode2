# Blog App

## Setup

- Add the following code snippet with proper values in `./config/default.json` for connecting to firestore:
  ```json
  {
    "apiKey": "",
    "authDomain": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": ""
  }
  ```
- `npm install` to install all dependencies.
- `npm start` to start the server, OR
- `npm run server` to start server using `nodemon`.

## Routes

### Testing

- GET - `/` - Return `"Hello, world!"`
- GET - `/render` - Render all blogs in HTML format

### Blog - `/api/blog`

- GET - `/` - Get all blogs
- GET - `/:id` - Get blog by id
- PUT - `/:id` - Update blog by id
- POST - `/create` - Create new blog
- DELETE - `/:id` - Delete blog by id
