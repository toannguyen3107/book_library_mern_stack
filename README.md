# Docker example for MERN stack project

This is project, virtualize project apply to doccker techniques.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js
- Docker
- MongoDB
- All depencies can run with docker.

## Getting Started

1. Clone this repository.
2. Start the project with `docker-compose up -d`.

## Configuration

- To configure MongoDB connection, open `backen/config.js` and update the MongoDB URI with your database credentials.
- you must to change `db:27017` intead of `loclahost:27017`

## Usage

- Access the web application by navigating to `http://localhost:8001` in your web browser.
- Use the following API endpoints for server-side functionality:
  - server run on `localhost:8000`
  - db run on `local`

## Deployment

- Deploy the client and server to a cloud platform like AWS, Heroku, or Netlify.

## Contributing

Explain how others can contribute to your project if it's open-source. For example:
1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the [Toan Nguyen].
