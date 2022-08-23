module.exports.plugin = {
    name: 'example',
    description: 'an example plugin',
    author: 'Dan Perkins (Aesth3tical)',
    repository: 'https://github.com/Aesth3tical/Modmail-Plugins/example',
    commands: [
        'example_command',
        'example_command_2'
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
