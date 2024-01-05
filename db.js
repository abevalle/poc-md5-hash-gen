require('dotenv').config()
// console.log(process.env)
const mysql = require("mysql");
const { serialize } = require('v8');
const dbInfo = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
}
const connection = mysql.createConnection(dbInfo)
 
const query = (statement, params = []) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, params, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const createTable = () => {

}

const doesTableExist = async (tableName) => {
    const statement = `
        SELECT COUNT(*)
        FROM information_schema.TABLES 
        WHERE TABLE_SCHEMA = ? 
          AND TABLE_NAME = ?
    `;

    // Replace 'your_database_name' with the actual database name
    const params = [process.env.DBNAME, tableName];

    try {
        const result = await query(statement, params);
        return result[0]['COUNT(*)'] > 0;
    } catch (error) {
        console.error('Error during database query:', error);
        throw error;
    }
};

doesTableExist("string-gen").then((res) => {
    console.log(res)
})