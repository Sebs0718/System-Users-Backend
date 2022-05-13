
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

function getArea(connection, data ,callback){
    let query = `SELECT * FROM areas WHERE codigo = ${data}`;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function postArea(connection, data ,callback){
    let query = `INSERT INTO areas (nombre, lider)
        VALUES ('${data.nombre}','${data.lider}')
    `;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function putArea(connection, data, id ,callback){
    let query = `UPDATE areas SET
    nombre = '${data.nombre}', lider = '${data.lider}',
    estado = '${data.estado}' WHERE codigo = ${id}
    `;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function deleteArea(connection, data ,callback){
    let query = `DELETE FROM areas WHERE codigo = ${data}`;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result[0]);
        }
    });
}

module.exports = { getAreas, getArea, postArea, putArea, deleteArea };