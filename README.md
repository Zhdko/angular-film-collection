# Angular Film Collection

A high-performance movie catalog application built with **Angular 21**. This project focuses on reactive architecture, standalone components, and a robust development workflow using modern tooling.

## Technical Stack

- **Framework**: Angular 21 (Standalone components, Signals API).
- **Testing**: Vitest with JSDom.
- **Code Quality**: ESLint, Prettier, Husky, and Lint-staged.
- **Commit Standard**: Commitlint (Conventional Commits).
- **Styling**: SCSS with Modern-normalize.

## Core Features

- **Reactive State Management**: Implementation of Angular Signals for fine-grained reactivity and optimized change detection.
- **Dynamic Breadcrumb System**: A centralized service for real-time navigation path generation, supporting dynamic title injection for movie-specific routes.
- **Modular Routing**: Clean route architecture with wildcard protection and automatic redirects.
- **Automated Workflow**: Git hooks via Husky to ensure code formatting and linting before every commit.

## Installation and Setup

### Prerequisites

- Node.js (matching `npm@11.8.0` requirement)
- Angular CLI

### Development Environment

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Zhdko/angular-film-collection.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Local Development Server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:4200/`.

## Available Scripts

- `npm start`: Runs the application in development mode.
- `npm run build`: Compiles the application into the `dist/` directory.
- `npm test`: Executes unit tests using Vitest.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

- **src/app/core**: Singleton services, global models, and core logic.
- **src/app/pages**: Main view components (Catalog, MovieDetails).
- **src/app/shared**: Reusable UI components, pipes, directives.
- **src/assets**: Static assets.
