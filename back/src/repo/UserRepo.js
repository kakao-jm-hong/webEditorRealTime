const getConnection = require(__dirname + '/config/database.js').getConnection;

module.exports = {
    insert: () =>{
        var sql = 'SELECT id, nickname, imageSrc, type FROM User';    
        getConnection((conn) => {
            conn.query(
                sql, (err, rows, fields) => {
                    if(err) console.log(err);
                    else return rows;
                }
            );
            conn.release();
        });
    },
    create: () =>{

    },
    delete: () =>{

    },
    update: () =>{
        
    }
}