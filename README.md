# Lab13_1-social-media-api
Scenario
You are a backend developer at a startup that is building a new social media platform. Your first major task is to establish the core infrastructure for the application. This involves setting up a production-ready database on MongoDB Atlas and creating a simple Node.js/Express application that can successfully connect to it. This initial setup is critical for all future development on the platform.

Learning Objectives
By the end of this activity, you will have demonstrated your ability to:

Set up a new project on MongoDB Atlas.
Configure a new database cluster for a production environment.
Create a database user with appropriate permissions.
Connect a Node.js/Express application to the Atlas cluster.
Secure the database connection string using environment variables.
Instructions
Task 1: Set Up the MongoDB Atlas Cluster
Navigate to MongoDB Atlas  and sign in or create a new account.
Create a new project in your organization.
Build a new database cluster using the free “M0” tier.
Create a new database user with a secure password. Grant this user the “Read and write to any database” permission.
Configure network access to allow connections from anywhere. For a real production database, you would restrict this to specific IP addresses, but for this exercise, allowing access from 0.0.0.0/0 is acceptable.
Once the cluster is deployed, find and copy the connection string for your application.
Task 2: Set Up the Node.js/Express Project
Create a new directory for your project (e.g., social-media-api).

Initialize a new Node.js project with npm init -y.

Install the necessary packages: express, mongodb, and dotenv.

Create a .gitignore file and add node_modules/ and .env to it.

Create a .env file and add your MongoDB Atlas connection string to it. Be sure to replace <password> with the actual password you created.


MONGO_URI="your_connection_string_goes_here"
Task 3: Build the Express Application
Create a file named server.js.
In server.js, build a simple Express application that connects to your MongoDB database. The server should:
Require express, mongodb, and dotenv.
Load environment variables from the .env file.
Create an Express app instance.
Define a port (e.g., 3001).
Use the MongoClient to connect to the database using the URI from your environment variables.
Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
Start the server.

[](Database_Connection_Test.jpg)

Submission Instructions
Ensure your server.js file correctly connects to the database and your connection string is properly secured in the .env file.
Verify that your server runs without errors using node server.js.
Test your server by visiting http://localhost:3001/ in your browser or using a tool like Postman. You should see the success message.
Submit a link to a GitHub repository containing your project files. Do not include your .env file in the repository.
Grading
This lab is graded on a complete/incomplete basis. You will receive 20 points for a complete and functional submission that meets all the requirements outlined in the instructions.

Reflection Questions
Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
- It is important to only allow connections to the database from specific IP addresses that you want to be able to connect. This is part of the principle of least privelege. By allowing connections from anywhere with the 0.0.0.0/0 default route there is no security in place to prevent unauthorized connections to the database.

What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
- The dotenv package loads environment variables from a .env file into process.env during development. This keeps sensitive data like API keys and database passwords out of your source code. AWS Secrets Manager / Systems Manager Parameter Store: Securely stores encrypted configuration data. Google Cloud Secret Manager: Manages, audits, and accesses secrets as blobs or text strings.Azure Key Vault: Safeguards cryptographic keys and secrets used by cloud apps.

If your application failed to connect, what are the first few steps you would take to debug the issue?
- I would double-check that my connection string was entered correctly into the .env file due to typos or other formatting issues (such as extra spaces or special characters that haven't been escaped). Then I would troubleshoot any error codes and messages that are returned by error handling routines or console.logs and developer tools.