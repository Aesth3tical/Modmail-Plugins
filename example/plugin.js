module.exports.plugin = {
    name: 'example',
    description: 'an example plugin',
    author: 'Dan Perkins (Aesth3tical)',
    repository: 'https://github.com/Aesth3tical/Modmail-Plugins/blob/main/example/plugin.js',
    commands: [
        'example_command',
        'example_command_2',
        'example_command_3'
    ]
}

module.exports.example_command = {
    name: 'example',
    description: 'an example command',
    run: async (client, message) => {
        message.reply({ content: 'Hello World' })
    }
}

module.exports.example_command_2 = {
    name: 'example2',
    description: 'another example command',
    run: async (client, message) => {
        message.reply({ content: 'Hello Modmail' })
    }
}

module.exports.example_command_3 = {
    name: 'example3',
    description: 'yet another example command (implemented to test plugin updates on the bot',
    run: async (client, message) => {
        message.reply({ content: `Hello ${message.author}` })
    }
}
