module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Burada zaten mevcut olandan sonra sırada müzik yok ❌`);

        await queue.clear();

        message.channel.send(`Kuyruk az önce temizlendi. 🗑️`);
    },
};