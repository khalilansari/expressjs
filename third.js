//Third Day.

console.log("third");

//NODEMON INSTALL 
//Server Creation



var express = require('express')
var app = express()

//Routing Method



app.get('/about',function (req,res){
	res.send('this is about')
})


app.set('view engine','ejs')

// app.get('/profile/:id',function (req,res){
// 	res.send('this is profile no '+req.params.id)
// 	console.log(req.params);
// })

app.listen(8003,function () {
	console.log("8003 is working");
})

//Loading HTML FIles

// app.get('/',function (req,res){
// 	res.sendFile(__dirname+'/a.html')
// })

//static file
app.get('/',function (req,res){
	res.sendFile(__dirname+'/home.html');
})

app.get('/about',function (req,res){
	res.sendFile(__dirname+'/about.html')
})

// app.get('/contact',function (req,res){
// 	res.render(__dirname+'/contact.ejs')
// })



//Get, Post
const exp = require('body-parser');
var urlencoder = exp.urlencoded({
	extended:false
});

// app.post('/contact',urlencoder,function (req,res){
// 	res.send(req.body)
// })


// chaining GET POST Sath mai


app.route('/contact').
get(function (req,res){
	res.render(__dirname+'/contact.ejs')
}).
post(urlencoder,function (req,res){
	res.send(req.body)
})

app.get('/profile/:id',function (req,res,next){
	if (req.params.id==13) {
		next();
	}
	else
		res.send('unauthorized access')
},
function (req,res) {
	res.send('acess granted')
});



var mysql = require('mysql')
var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"expressjs"
})

conn.connect(function(err){
	if(err)
		console.log(err);
});

app.get('/query',function(req,res){
	conn.query("INSERT INTO student (srno, name, result) VALUES (3, alo, pass)",function(err,result){
	res.send(result.name)
})

});




























