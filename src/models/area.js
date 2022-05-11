
function getAreas(connection, callback){
    let query = 'SELECT * FROM areas';
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

module.exports = { getAreas };