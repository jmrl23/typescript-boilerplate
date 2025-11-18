# TypeScript Boilerplate

A simple boilerplate for TypeScript projects.

## Features

- TypeScript
- Environment variable loading with `@dotenvx/dotenvx`
- Path aliases with `tsconfig-paths`
- SWC for faster compilation with `ts-node`

## Getting Started

### Prerequisites

- Node.js
- Yarn (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/typescript-boilerplate.git
   ```

1. Install dependencies:

   ```bash
   yarn install
   ```

1. Create a `.env` file in the root directory and add the following:

   ```bash
   MESSAGE="Hello, World!"
   ```

### Usage

- **Development:**

  ```bash
  yarn dev
  ```

- **Build:**

  ```bash
  yarn build
  ```

- **Start (after building):**

  ```bash
  yarn start
  ```
