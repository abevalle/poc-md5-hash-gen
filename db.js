import 'dotenv/config'
// console.log(process.env)
import mysql from "mysql";
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

export const insertRecord = async (string, hash) => {
    const statement = `
        INSERT INTO strings (string, hash) VALUES (?, ?)
    `;
    const params = [string, hash]; 

    try {
        const result = await query(statement, params);
        return result.insertId;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return null;
        }
        console.error('Error during database query:', error);
        throw error;
    }
};

const createTable = async () => {
    const statement =`
        CREATE TABLE strings (
            id INT PRIMARY KEY AUTO_INCREMENT,
            string VARCHAR(2560) NOT NULL,
            hash VARCHAR(9999) NOT NULL
        );
        `
    try {
        const result = await query(statement);
        return result;
    } catch (error) {
        console.error('Error during database query:', error);
        throw error;
    }
}

const doesTableExist = async (tableName) => {
    const statement = `
        SELECT COUNT(*)
        FROM information_schema.TABLES 
        WHERE TABLE_SCHEMA = ? 
          AND TABLE_NAME = ?
    `;

    const params = [process.env.DBNAME, tableName];

    try {
        const result = await query(statement, params);
        return result[0]['COUNT(*)'] > 0;
    } catch (error) {
        console.error('Error during database query:', error);
        throw error;
    }
};