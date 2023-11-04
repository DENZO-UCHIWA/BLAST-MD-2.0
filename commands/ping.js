/**                                                            
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BLAST-MD
 * @author : DENZO-UCHIWA <https://github.com/DENZO-UCHIWA>
 * @description : Blast-md,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const Secktor = require('../lib');
Secktor.cmd({
    pattern: "ping",
    desc: "To check ping",
    category: "general",
    filename: __filename,
},
async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: '*⚡𝐏𝐈𝐍𝐆 𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 𝐁𝐘 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀*' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 1;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '*⚡𝐏𝐈𝐍𝐆 𝐁𝐋𝐀𝐒𝐓-𝐌𝐃 𝐁𝐘 𝐃𝐄𝐍𝐙𝐎 𝐔𝐂𝐇𝐈𝐖𝐀*'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*Pong*\n ${loadingBar}`, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await Secktor.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: `*⚡𝐏𝐎𝐍𝐆 𝐁𝐋𝐀𝐒𝐓-𝐌𝐃*: ${pingValue} ms*` });
});
