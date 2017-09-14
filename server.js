let tmi = require('tmi.js')
let handlers = require('./handlers')
let viewedChannel = 'kingrazy'

//connect to irc
let client = new tmi.client(options)
client.connect()

//defualt options for tmi.js
let options = {
	options: {
		debug: true
	},
	connections: {
		cluster: 'aws',
		reconnect: true
	},
	identity: {
		username: 'kingrazy',
		password: 'oauth:anx9oj8pfbht8qax4kmbcn3lqcal84'
	},
	channels: [viewedChannel]
}

client.on('chat',function(channel,user,message,self) {
  if (handlers[message]) {
    client.action(viewedChannel, handlers[message]())
  }
})

client.on('connected',function(address, port) {
	client.action(viewedChannel, 'hello im a cool guy')
})




