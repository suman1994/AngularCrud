var express = require("express");
var mysql = require("mysql");
var app = express();
var port = 3000;

var conn  = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "myangular"
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/allUsers",function(request,response){
    conn.query("SELECT * FROM users WHERE isActive = 'true' ",function(error_query,results){
        if(error_query){
            response.send("Somthing wrong with query");
        }else{
            console.log(results);
            response.send(results);
        }
    });
});

// myDate = new Date();
// let getDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
// let getTime = this.datePipe.transform(this.myDate, 'H:i:s');

app.post("addUsers",function(request,response){
    console.log('suman here');
    console.log(request.body);
    conn.query("INSERT INTO users (name,gender,email,phoneNumber,contactPreference,isActive) VALUES ("+request.body.fullName+","+request.body.gender+","+request.body.email+","+request.body.phoneNumber+","+request.body.contactPreference+","+request.body.isActive+")",function(error_query,results){
        if(error_query){
            response.send("Somthing wrong with query");
        }else{
            console.log("1 Record inserted successfully!");
            response.send("1 Record inserted successfully!");
        }
    });
});


app.listen(port, function() {
    console.log('--------------------SERVER INITIALIZED--------------------');
});