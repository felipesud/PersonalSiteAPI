# Project Directory Structure

This file provides an overview of the directory structure within the project:

- **node_modules/**: Folder containing project dependencies. Not stored in version control.
- **src/**: Source code directory.
  - **config/**: Configuration files for database, JWT, and Swagger/OpenAPI.
  - **controllers/**: Contains controller logic for handling various endpoints.
  - **models/**: Definitions of data models used in the application.
  - **routes/**: Route definitions for API endpoints.
  - **middleware/**: Custom middleware functions such as authentication, validation, and error handling.
  - **services/**: Business logic layer separating controllers and data models.
  - **utils/**: Utility functions and constants used across the project.
  - **app.ts**: Entry point of the application.

- **.eslintrc**: Configuration file for ESLint.
- **package.json**: Project metadata and dependency list.
- **package-lock.json**: Lock file specifying exact versions of dependencies.
- **README.md**: Main project README file containing project overview and instructions.



PersonalSiteAPI/
│
├── src/
│   ├── config/
│   │   ├── index.ts               # Configuration files (e.g., database, JWT)
│   │   └── swagger.ts             # Swagger/OpenAPI configuration
│   │
│   ├── controllers/
│   │   ├── home.controller.ts      # Controller for home endpoint
│   │   ├── about.controller.ts     # Controller for about endpoint
│   │   ├── education.controller.ts # Controller for education endpoint
│   │   ├── experience.controller.ts# Controller for experience endpoint
│   │   ├── portfolio.controller.ts # Controller for portfolio endpoint
│   │   └── contact.controller.ts   # Controller for contact endpoint
│   │
│   ├── models/
│   │   ├── Home.ts                # Model for home content
│   │   ├── About.ts               # Model for about content
│   │   ├── Education.ts           # Model for education content
│   │   ├── Experience.ts          # Model for experience content
│   │   ├── Portfolio.ts           # Model for portfolio content
│   │   └── Contact.ts             # Model for contact content
│   │
│   ├── routes/
│   │   ├── home.routes.ts          # Routes for home endpoint
│   │   ├── about.routes.ts         # Routes for about endpoint
│   │   ├── education.routes.ts     # Routes for education endpoint
│   │   ├── experience.routes.ts    # Routes for experience endpoint
│   │   ├── portfolio.routes.ts     # Routes for portfolio endpoint
│   │   └── contact.routes.ts       # Routes for contact endpoint
│   │
│   ├── middleware/
│   │   ├── authentication.ts      # JWT authentication middleware
│   │   ├── validation.ts          # Request validation middleware
│   │   └── errorHandling.ts       # Error handling middleware
│   │
│   ├── services/
│   │   ├── home.service.ts         # Service for home content logic
│   │   ├── about.service.ts        # Service for about content logic
│   │   ├── education.service.ts    # Service for education content logic
│   │   ├── experience.service.ts   # Service for experience content logic
│   │   ├── portfolio.service.ts    # Service for portfolio content logic
│   │   └── contact.service.ts      # Service for contact content logic
│   │
│   ├── utils/
│   │   ├── constants.ts           # Constant values used across the project
│   │   └── logger.ts              # Logging utility
│   │
│   └── app.ts                     # Entry point of the application
│
├── .eslintrc                       # ESLint configuration
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project README file
