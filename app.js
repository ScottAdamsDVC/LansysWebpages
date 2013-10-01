var express = require('express'),
	myapi = require('./request.js').Request;
var app = express();
//app.use(express.static('/mnt/Documents/DVC/nodejs/Admin'));
app.use(express.static('/home/root/nodejs/Admin'));
app.use(express.bodyParser()); // Required for parsing POST

app.get('/request', function(req, res){
    //console.log("received get: app.get('/request', function(req, res){ ... }");
    //Get it again from the server in case anything changed
    myapi.RequestConfiguration();
    //Just send the string we got the last time
    res.send(myapi.xmloutput());
    res.end();
});
app.get('/status', function(req, res){
    //console.log("received get: app.get('/status', function(req, res){ ... }");
    //Get it again from the server in case anything changed
    myapi.RequestStatus();
    //Just send the string we got the last time
    res.send(myapi.statusout());
    res.end();
});

app.post('/save', function(req, res){
    //console.log("received POST: app.post('/save', function(req, res){ ... }");
    
    if (req.param("Update") == "System")
    {
    	myapi.SendSystemConfiguration(req.param("systemparams"));
    	//console.log("Got " + JSON.stringify(req.param("systemparams")));
    }
    else if (req.param("Update") == "Splicer")
    {
    	myapi.SendSplicerConfiguration(req.param("splicerparams"));
    }
    else if (req.param("Update") == "Channel")
    {
    	myapi.SendChannelConfiguration(req.param("channelparams"));
    }
    else if (req.param("Update") == "Gains")
    {
    	myapi.SendChannelConfiguration(req.param("channelgains"));
    }
    res.end();
    //update our local string
   	myapi.RequestConfiguration();

});
app.post('/Action', function(req, res){
    //console.log("received POST: app.post('/Action', function(req, res){ ... }");
    myapi.SendAction (req.param('Action'));
});

myapi.OpenSocket();

//app.listen(3000);
app.listen(80);
