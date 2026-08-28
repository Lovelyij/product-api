\# Reflection – Task 1: Product Management API



\## Development Approach



I built the API using Node.js, Express, and MongoDB with Mongoose, following a modular structure that separates concerns: models for data schema, validators for input rules, controllers for business logic, and routes for endpoint definitions. I started by scaffolding the project structure, then built outward from the data model — defining the Product schema first, then the validation rules, then the controller logic for each CRUD operation, and finally wiring everything together through the routes and server entry point.



I used Joi for request validation rather than relying solely on Mongoose's built-in validation, so that invalid requests are rejected with clear error messages before they ever reach the database layer.



\## Challenges Encountered



The biggest challenges were environment and setup issues rather than logic problems:



\- Module resolution errors (`Cannot find module`) came up repeatedly because file names didn't exactly match what was being required (e.g. `Products.js` vs `Product.js`), and because some files were created empty and needed their code added afterward.

\- A syntax error from missing backticks in a template literal (`console.log`) caused the server to crash on startup.

\- A mismatch between the environment variable name in `.env` (`MONGODB\_URI`) and the name referenced in code (`MONGO\_URI`) caused a connection failure that looked like a bigger problem than it was.

\- Windows-specific quirks, like PowerShell not accepting CMD-style flags (`/s /b`), slowed down basic file exploration.



**## How I Addressed Them**



I worked through each error systematically — reading the stack trace to identify exactly which file and line was failing, checking whether the file existed and matched the expected name/path, and fixing one issue at a time rather than guessing. For the MongoDB connection issue, I traced the variable name through both the `.env` file and the `db.js` config file until I found the mismatch. For setup and folder-structure problems, I eventually reset the project from scratch with a clear, deliberate file structure, which made it much easier to track what existed and what still needed to be created.



\## Improvements I Would Make in the Future



\- Set up a linter and a `.env.example` file from the start to catch naming mismatches and typos earlier.

\- Write basic tests (e.g. with Jest or Supertest) for each endpoint so validation and error handling are verified automatically rather than manually.

\- Add centralized error-handling middleware instead of repeating try/catch blocks in every controller function.

\- Confirm environment and database connectivity before building out full CRUD logic, to isolate setup issues from application logic issues earlier.

