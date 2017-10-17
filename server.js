var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //In JavaScript Variables Caps means its a Constant

/*var url = '/home';
function send(req,res){
	res.send('Hello');
}
app.get(url,send);*/

app.get('/home',function(req,res){
	res.send('Hello This is Express Web Server ! Welcome Home !');
});

app.get('',function(req,res){
	app.use(express.static(__dirname + '/Reservation/Customer/home.html'));
});

app.use(express.static(__dirname + '/Reservation'));

app.listen(PORT, function(){
	console.log('Express Server Started at port: ', PORT);
});
