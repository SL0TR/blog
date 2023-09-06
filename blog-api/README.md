# Blog API

This project was bootstrapped with [NestJS]("http://nestjs.com/).

## Stack

- Node
- NestJS
- Express
- MongoDB
- Mongoose
- Passport
- Bcrypt
- NestJS Command
- Class Validator + Transformer
- Sanitize HTML
- and more

### Installation

```bash
$ npm install
```

### Database setup

If you have Docker and Docker Compose, Run the MongoDB service by:

```bash
$ docker-compose up -d
```

If you don't have Docker, Install MongoDB from [here]("https://www.mongodb.com/try/download/") and run the service.

## Environment Variables

Create a `.env` file and populate it (see `.env.example`)

| Key        | What Is It?                           | Default                             |
| ---------- | ------------------------------------- | ----------------------------------- |
| DB_URL     | URL of MongoDB                        | "mongodb://localhost:27017/blog_db" |
| PORT       | Port on which the app will be running | 5500                                |
| JWT_SECRET | Secret text used to hash JWT tokens   | "secretForBlogApi"                  |

### Seed the Database

```bash
# seeds users and posts if none exists
$ npm run seed
```

### Running the app

```bash
# development
$ npm run start

# development:watch mode
$ npm run start:dev

```

### Build and run

```bash
# production
$ npm run build or yarn build

# production mode
$ npm run start:prod
```
