const sql = require("mssql");

const config = {
    user: 'scraping',
    password: 'Clima1010',
    server: '200.63.97.28', 
    database: 'scraping',
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        requestTimeout: 300000,
    },
    pool: {
      max: 1000, 
      min: 1,
      idleTimeoutMillis: 30000
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getConnection
};