// Import mysql2
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: "database-1.c7i0emwesv74.us-east-2.rds.amazonaws.com",
    user: "admin",
    database: "databasexxx",
    password: "Xxx202405",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to get data from your database
function getData(query, callback) {
    pool.query(query, function (err, results, fields) {
        if (err) return callback(err);
        callback(null, results);
    });
}

// Export the function
module.exports = {
    getData
};
