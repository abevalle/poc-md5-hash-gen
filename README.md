
# poc-md5-hash-gen 🚀

## Description 📝
`poc-md5-hash-gen` is a JavaScript application designed for generating MD5 hashes 🌐 of all possible string permutations from a predefined alphabet. This tool uses the `hash-wasm` library and demonstrates hashing techniques and data storage management in JavaScript.

## Installation 💻
To install this project:

1. Ensure [Node.js](https://nodejs.org/) is installed on your machine.
2. Clone the repository or download the project source code.
3. Navigate to the project directory.
4. Install the required dependencies:
   ```bash
   npm install
   ```

## Configuration 🔧
Before running the application, you must create an `.env` file in the root of the project directory with the following database configurations:

```
DBHOST=your_database_host
DBPORT=your_database_port
DBUSER=your_database_username
DBPASS=your_database_password
DBNAME=your_database_name
```
Replace `your_database_host`, `your_database_port`, `your_database_username`, `your_database_password`, and `your_database_name` with your actual database details.

## Setup 🛠️
Run the setup script to initialize the application:

1. Execute the setup script:
   ```bash
   node setup.js
   ```
   This script will create a table in the specified database for storing generated hashes.

## Usage 📊
After completing the setup:

1. Start the application by running `index.js` with a number greater than 1 as an argument:
   ```bash
   node index.js <number>
   ```
   Replace `<number>` with a numerical value greater than 1. The script will generate strings based on the defined alphabet and compute their MD5 hashes, storing the results in the database.

## Contributing 🤝
Contributions to `poc-md5-hash-gen` are appreciated:

1. Fork the repository.
2. Create a feature branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new Pull Request.

## License 📜
This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

## Contact 📩
For support or inquiries, please contact [Your Name] at [Your Email].
