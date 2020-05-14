const TelegramBot = require('node-telegram-bot-api');
const os = require('os');

const bot = new TelegramBot('1203659660:AAEL1P3XQffCNXGkuztY95BV3XTNawZE0QQ',{polling:true});

bot.on('message',msg=>{
    bot.sendMessage(msg.chat.id,`Hello from ${os.type}, bot says hi to "${msg.from.first_name}"`);
})