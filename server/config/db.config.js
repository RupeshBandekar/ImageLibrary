const sql = require("mssql/msnodesqlv8");

const config = {
    connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-F9K3VD8\\SQLEXPRESS;Database=ImageLibrary;Trusted_Connection=yes;",
    connectionTimeout: 30000
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}