function getAll(connection, callback){
    let query = 'SELECT u.*, e.estado as desc_estado, a.nombre as nom_area FROM usuarios u inner join estados e on e.id = u.estado inner join areas a on a.codigo = u.area';
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function getUser(connection, data ,callback){
    let query = `SELECT * FROM usuarios WHERE idusuarios = ${data}`;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result[0]);
        }
    });
}

function getState(connection, callback){
    let query = 'SELECT * FROM estados';
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function postUser(connection, data ,callback){
    let query = `INSERT INTO usuarios (documento, nombres, apellidos, fecha_nacimiento, email, area, salario)
        VALUES (${data.documento},'${data.nombres}','${data.apellidos}','${data.fecha_nacimiento}','${data.email}',${data.area},${data.salario})
    `;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function putUser(connection, data, id ,callback){
    let query = `UPDATE usuarios SET
    documento = ${data.documento}, nombres = '${data.nombres}', apellidos = '${data.apellidos}',
    fecha_nacimiento = '${data.fecha_nacimiento}', email = '${data.email}', area = ${data.area},
    salario = ${data.salario}, estado = ${data.estado} WHERE idusuarios = ${id}
    `;
    console.log(query)
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result);
        }
    });
}

function deleteUser(connection, data ,callback){
    let query = `DELETE FROM usuarios WHERE idusuarios = ${data}`;
    connection.query(query, function(err, result) {
        if(err){
            throw err;
        } else {
            callback(result[0]);
        }
    });
}

module.exports = { getAll, getUser, getState, postUser, putUser, deleteUser };