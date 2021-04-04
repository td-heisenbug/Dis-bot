module.exports = {
	name: 'now',
	description: 'Attendance',
	execute(message, args) {
		message.channel.send('@everyone Attendance now!!');
	},
};