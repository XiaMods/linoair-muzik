module.exports = {
    name: 'back',
    aliases: [],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok. ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Daha önce çalan müzik yoktu ❌`);

        await queue.back();

        message.channel.send(`Önceki müzik çalmaya başladı... ✅`);
    },
};