const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('bu müzik botuna erişmek için: [Voxy Code](https://discord.gg/S6fYjsrDG8), daha fazla yardıma ihtiyacınız var Discord Topluluğumuza katılarak yardım alabilirsiniz.\nKendi müzik dünyanızı yaratmaya ne dersiniz?') ;
        embed.addField(`Mevcut - ${commands.size} Mevcut Komut`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Müzik Bot Komutları', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};
