const mySql = require('mysql2/promise');
class sql{
    conn;
    constructor(host,pass,name,db) {
        this.conn=mySql.createPool({
            host:host,
            user:name,
            database:db,
            password:pass,
            waitForConnections:true,
            connectionLimit:10,
            queueLimit:0
        });
    }
     sqlQuery(str){
        return this.conn.query(str);
    }
}
module.exports= {sql};