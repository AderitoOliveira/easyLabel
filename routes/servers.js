var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.EASYLABELDB_SERVICE_HOST,
  user: 'easylabeldb',
  password: 'easylabeldb',
  database: 'easylabeldb',
  port: process.env.EASYLABELDB_SERVICE_PORT_MYSQL
});

//var con = mysql.createConnection({
//    host: '127.0.0.1',
//    user: 'anoliveira',
//    password: 'anoliveira',
//    database: 'nodetestes',
//    port: '3306'	
//  });


fetchAllClients = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM clients', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

fetchSingleClient = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM clients where clientid=?', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');        
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}


fetchAllClientProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM client_product', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');        
        callback.end(JSON.stringify(rows));
        //console.log(rows); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

fetchSingleClientProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products WHERE productid in (select productid from client_product where clientid = ?)', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

fetchAllProducts = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}


fetchSingleProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products where productid=?', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}


insertClient = function(req, res) {
    var postData  = req.body;
    console.log("##########################################################");
    console.log(req.body);
    console.log("##########################################################");
    con.connect(function(err) {
    con.query('INSERT INTO clients SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}