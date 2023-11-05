const _0x3d8f13=_0x1129;(function(_0x4b0aca,_0x2a56bf){const _0x4b77e1=_0x1129,_0x5c2fc8=_0x4b0aca();while(!![]){try{const _0x46b83a=-parseInt(_0x4b77e1(0x170))/0x1+parseInt(_0x4b77e1(0x181))/0x2*(-parseInt(_0x4b77e1(0x189))/0x3)+parseInt(_0x4b77e1(0x17b))/0x4*(parseInt(_0x4b77e1(0x16e))/0x5)+-parseInt(_0x4b77e1(0x163))/0x6+-parseInt(_0x4b77e1(0x1a4))/0x7*(parseInt(_0x4b77e1(0x188))/0x8)+-parseInt(_0x4b77e1(0x186))/0x9*(-parseInt(_0x4b77e1(0x162))/0xa)+-parseInt(_0x4b77e1(0x187))/0xb*(-parseInt(_0x4b77e1(0x18c))/0xc);if(_0x46b83a===_0x2a56bf)break;else _0x5c2fc8['push'](_0x5c2fc8['shift']());}catch(_0x2a4a7d){_0x5c2fc8['push'](_0x5c2fc8['shift']());}}}(_0xb39e,0x3f4e7));const os=require('os'),moment=require(_0x3d8f13(0x17e)),fs=require('fs'),Config=require(_0x3d8f13(0x19f));let {fancytext,tlang,tiny,runtime,formatp,botpic,prefix,sck1}=require(_0x3d8f13(0x18d));function _0xb39e(){const _0x238318=['4264997DHwMWU','8NniqqA','24693bLrLPy','Asia/Kolkata'
BLAST.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📃",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('AFRICA/BRAZZAVILLE')
                    .locale('id')
                const date = moment.tz('Africa/Brazzaville').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `🧘 ` + fancytext(Config.ownername.split('BLAST-MD')[0], 58) + ` 🍁\n`
                str +=
                    '' + `𝗵𝗲𝗹𝗹𝗼 ${citel.pushName}☺️
╭───────────●
╎👻𝗴𝗼𝗼𝗱 𝗺𝗼𝗿𝗻𝗶𝗻𝗴👋
╰───────────●
╔══════════════❍
║➪𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 
║➪𝐃é𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐍𝐔𝐌:+244935469526 
║➪𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃: 000.23 
║➪𝐌𝐎𝐃𝐄: ${MODE}
║➪𝐏𝐄𝐅𝐈𝐗𝐄: 〘 ${prefix} 〙
║➪𝐓𝐇𝐄𝐌𝐄:  ${tlang().title}
║➪𝐌𝐄𝐌𝐎𝐑𝐘: 64GB
║➪𝐁𝐘: 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀
╚══════════════❍
    ╭─────────●
    ╎📃𝙘𝙤𝙢𝙢𝙖𝙣𝙙 𝙡𝙞𝙨𝙩
    ╰─────────●\n` + ''
                for (const category in cmds) 
                {
                   str += `╔═⍟${tiny(category)}⍟══❍\n` ;                   if(text.toLowerCase() == category.toLowerCase()){ str = `╔═⍟ ${tiny(category)}\n⍟══❍` ;      
                        for (const plugins of cmds[category]) { str += `║➪ ${fancytext(plugins,1)}\n` ; }
                        str += `╚════════════❍\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `║➪ ${fancytext(plugins,1)}\n` ; }
                         str += `╚══════════❍\n`  ; 
                   }
  
                }
                str+= `*BLAST-MD BY DENZO UCHIWA 🌟*`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "cmd",
            desc: "cmd1",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭–––〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙–––––––►`
            str += `
┆➪╭──────────────►      
┆➪│► *User:* ${citel.pushName}
┆➪│► *Theme:* ${tlang().title}
┆➪│► *Prefix:* ${prefix}
┆➪│► *Owner:* ${Config.ownername}
┆➪│► *Commands:* ${commands.length}
┆➪│► *Uptime:* ${runtime(process.uptime())}
┆➪│► *Mem:* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┆➪│►  
┆➪│►  *BLAST-MD BY DENZO UCHIWA*
┆➪╰───────────────────►
╰–––––––––––––––––––––––►\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `┆► ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "👤",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
