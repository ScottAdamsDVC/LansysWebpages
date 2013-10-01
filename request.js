var net = require('net');
var events = require('events');
var util = require('util');
var xmlwriter = require('./js/xmlwriter.js').XmlWriter;
var client = new net.Socket();


function RequestClass() {
	var ConfigurationXmlString;
	var StatusXmlString;
}

util.inherits(RequestClass, events.EventEmitter);

RequestClass.prototype.xmlinput = function(xmlstring){
	this.ConfigurationXmlString = xmlstring;
};

RequestClass.prototype.xmloutput = function(){
	return ( this.ConfigurationXmlString );
};

RequestClass.prototype.statusin = function(xmlstring){
	this.StatusXmlString = xmlstring;
};

RequestClass.prototype.statusout = function(){
	return ( this.StatusXmlString );
};
RequestClass.prototype.Reconnect = function(){
	//setTimeout(this.OpenSocket,500);
}

RequestClass.prototype.OpenSocket = function(){
	//console.log('Socket open');
	client.connect({port: 2111});
//	RequestObject.RequestConfiguration();
//	RequestObject.RequestStatus();
};


RequestClass.prototype.SendSplicerConfiguration = function(input){

	xmlwriter.writeElement( 'Configuration');
	xmlwriter.writeElement( 'Splicer', input );
	xmlwriter.writeElementClose( 'Splicer' );
	xmlwriter.writeElementClose( 'Configuration' );
	
	//console.log( xmlwriter.xml );
	client.write(xmlwriter.xml);
	xmlwriter.clear();

};
RequestClass.prototype.SendChannelConfiguration = function(input){

	xmlwriter.writeElement( 'Configuration');
	xmlwriter.writeElement( 'Channel', input );
	xmlwriter.writeElementClose( 'Channel' );
	xmlwriter.writeElementClose( 'Configuration' );
	
	console.log( xmlwriter.xml );
	client.write(xmlwriter.xml);
	xmlwriter.clear();

};
RequestClass.prototype.SendChannelGains = function(input){

	xmlwriter.writeElement( 'Gains');
	xmlwriter.writeElement( 'Channel', input );
	xmlwriter.writeElementClose( 'Channel' );
	xmlwriter.writeElementClose( 'Gains' );
	
	console.log( xmlwriter.xml );
	client.write(xmlwriter.xml);
	xmlwriter.clear();

};
RequestClass.prototype.SendSystemConfiguration = function(input){

	xmlwriter.writeElement( 'Configuration');
	xmlwriter.writeElement( 'System', input );
	xmlwriter.writeElementClose( 'System' );
	xmlwriter.writeElementClose( 'Configuration' );
	
	//console.log( xmlwriter.xml );
	client.write(xmlwriter.xml);
	xmlwriter.clear();

};
RequestClass.prototype.SendAction = function(input){
	console.log(input);
	client.write('Action:'+input);
};

RequestClass.prototype.RequestConfiguration = function(){
	client.write("<GetConfig>");
};
RequestClass.prototype.RequestStatus = function(){
	client.write("<GetStatus>");
};

var RequestObject = new(RequestClass);

client.on('data', function(data) {
    console.log('Socket received: ' + data);
    var strbegin = data.toString();
    strbegin = strbegin.substring(0,8);
    if(strbegin == '<Status>')
    	RequestObject.statusin(data.toString());
   	else
    	RequestObject.xmlinput(data.toString());
});

client.on('close', function() {
	console.log('Socket close');
	setTimeout(RequestObject.OpenSocket,5000);
});
client.on('connect', function() {
	console.log('Socket connected');
	RequestObject.RequestConfiguration();
	RequestObject.RequestStatus();
});
client.on('error', function() {
	//console.log('Socket error');
	//RequestObject.OpenSocket();
});

// now expose with module.exports:
exports.Request = RequestObject;