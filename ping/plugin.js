module.exports.plugin = {
    name: 'plugin',
    description: 'An example plugin to get the bot\'s ping',
    author: 'Dan Perkins (Aesth3tical)',
    repository: 'https://github.com/Aesth3tical/Modmail-Plugins/blob/main/ping/plugin.js',
    commands: [
        'ping'
    ]
}

module.exports.ping = {
    name: 'ping',
    description: 'Ping the bot',
    run: async (client, message) => {
        message.reply({ content: 'Pong!' })
    }
}
