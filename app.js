var tmi = require('tmi.js');

//defualt options for tmi.js
var options = {
	options: {
		debug: true
	},
	connections: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "kingrazy",
		password: "oauth:anx9oj8pfbht8qax4kmbcn3lqcal84"
	},
	channels: ["kingrazy"]
};

//connect to irc
var client = new tmi.client(options);
client.connect();

var viewedChannel = "kingrazy";

//change the color of username, doesnt work??
client.color("HotPink");

client.on('chat',function(channel,user,message,self) {
	if (message === "!joke") {
		//after !joke is said, switches channel bot is talking in to partyinpink
		client.action(viewedChannel, "You are the joke.");
		client.part(viewedChannel);
		viewedChannel = "partyinpink";
		client.join("partyinpink");
		client.action(viewedChannel, user['display-name'] + " hi there whats up dawgg.");
	}
	else{
		client.action(viewedChannel, user['display-name'] + " hi there whats up dawgg.");
	}
});

client.on('connected',function(address, port) {
	client.action(viewedChannel, "hello im a cool guy");
});




