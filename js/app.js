var express = require('express'),
	myapi = require('./request.js').Request;
var app = express();
app.use(express.static('/home/root/nodejs/Admin'));
app.use(express.bodyParser()); // Required for parsing POST

app.get('/request', function(req, res){
    //console.log("received get: app.get('/request', function(req, res){ ... }");
    //Get it again from the server in case anything changed
    myapi.RequestConfiguration();
    //Just send the string we got the last time
    res.send(myapi.xmloutput());
});
app.get('/status', function(req, res){
    //console.log("received get: app.get('/request', function(req, res){ ... }");
    //Get it again from the server in case anything changed
    myapi.RequestStatus();
    //Just send the string we got the last time
    res.send(myapi.statusout());
});

app.post('/save', function(req, res){
    //console.log("received POST: app.post('/save', function(req, res){ ... }");
    //console.log("Got " + JSON.stringify(req.param("splicerparams")));
    if (req.param("Update") == "System")
    {
    	myapi.SendSystemConfiguration(req.param("systemparams"));
    }
    else if (req.param("Update") == "Splicer")
    {
    	myapi.SendSplicerConfiguration(req.param("splicerparams"));
    }
    else if (req.param("Update") == "Channel")
    {
    	myapi.SendChannelConfiguration(req.param("channelparams"));
    }
    //update our local string
   	myapi.RequestConfiguration();
});

myapi.OpenSocket();

app.listen(80);
