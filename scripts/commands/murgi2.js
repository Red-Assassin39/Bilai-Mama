module.exports.config = {
	name: "murgi",
	version: "1.0.2",
	permission: 2,
	credits: "nayan",
	prefix: false,
	description: "",
	category: "without prefix",
	usages: "[tag]",
	cooldowns: 5
};

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("রিফাদ কারে এগুলো বলতে চাও তাকে মেনশন করো 🐱", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("গালি লো");
setTimeout(() => {a({body: "সালা তুই একটা ঘোড়ার ডিম 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Sala tui Dinasour cho*a 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তোর পাছায় লাত্থি মারবো 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Oi Oi Oi emne ki dekhis 💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Tor pachay time bomb lagai dibo " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "depression er maire bap 🤬 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "tor sahos kmne hoy Rifad boss ke gali dewar🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Rifad ke boss dak 🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Rifad ke salam de  🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "tor pachai injection dibo  💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Bilai Hates gaki 😘।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Gali dile thappor dibo  ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "Tui toh darun gadha re " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("Tor gola Khule pocket e rekhe dibo bolod")} , 39000);
setTimeout(() => {a({body: "Tui amr favouite person ke gali dibi na 🥰।" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "সালা তুই একটা ঘোড়ার ডিম 🥰" + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "tui pagol murgi" + " " + name, mentions: arraytag})}, 51000);
setTimeout(() => {a({body: "Tui pagol hati 💔!" + " " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: "Panda kothakar " + " " + name, mentions: arraytag})}, 57000);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্ছা বস্তির পোলা " + " " + name, mentions: arraytag})}, 87000);
setTimeout(() => {a("~ Pagol er ghorer dim🤖")} , 93000);
setTimeout(() => {a({body: "Welcome Hala Bolod 🥰।" + " " + name, mentions: arraytag})}, 99000);
setTimeout(() => {a({body: "Gay gay gayyyyyyyy  ✋" + " " + name, mentions: arraytag})},162000);
setTimeout(() => {a({body: " বস্তিরন্দালাল এর বাচ্ছা বস্তির পোলা " + " " + name, mentions: arraytag})}, 168000);
setTimeout(() => {a("~ আমার পুত। জা ভাগ🤖")} , 39000);



  
  }
