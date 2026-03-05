# Instructions: Importing the Database Using psql

To import the provided SQL database file into your local PostgreSQL instance, follow these steps:

## Prerequisites
- Ensure PostgreSQL is installed and running on your machine.
- Make sure you have the `psql` command-line tool available.
- You should have a user (e.g., `postgres`) with sufficient privileges.
- Place the `core_banking.sql` file in your working directory.

## 1. Create the Database (if it doesn't exist)
Open a terminal and run:

```sh
psql -h localhost -U postgres -c "CREATE DATABASE core_banking;"
```
- Enter your password when prompted.
- If the database already exists, you can skip this step.

## 2. Import the SQL File
Run the following command:

```sh
psql -h localhost -U postgres -d core_banking < core_banking.sql
```
- This will import all tables, data, and schema from `core_banking.sql` into the `core_banking` database.

## 3. Verify the Import
You can connect to the database and list tables:

```sh
psql -h localhost -U postgres -d core_banking
\dt
```

## Notes
- If your user is not `postgres`, replace it with your actual PostgreSQL username.
- If your database file has a different name, adjust the command accordingly.
- If you encounter permission errors, ensure your user has the right privileges.

---

**Example Full Workflow:**

```sh
psql -h localhost -U postgres -c "CREATE DATABASE core_banking;"
psql -h localhost -U postgres -d core_banking < core_banking.sql
psql -h localhost -U postgres -d core_banking
\dt
```

This will set up your database for local development and testing.
