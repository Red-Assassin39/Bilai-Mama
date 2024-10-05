module.exports.config = {
	name: "murgi2",
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
    if(!mention) return api.sendMessage("রিফাদ যে তোমাকে এগুলো বলতে বাধ্য করেছে তাকে মেনশন দাও", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("VALO HOYE JA");
setTimeout(() => {a({body: "Ekhono boli valo hoye jao bon 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Oi sali tor mathai somossha? 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Women hahahahaha 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Meye dekhe kichu bollam na  💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Tor mathay time bomb lagai fatai dibo " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a("~ Issss bilai hate kore toke 🤖")} , 39000);
setTimeout(() => {a({body: "Pocha meye 🥰।" + " " + name, mentions: arraytag})}, 42000);
setTimeout(() => {a({body: "I love you na na I late you😍.." + " " + name, mentions: arraytag})}, 48000);
setTimeout(() => {a({body: "Hatir baccha pagol meye 🐰" + " " + name, mentions: arraytag})}, 51000);
setTimeout(() => {a({body: "Tui eto kharap keno  💔!" + " " + name, mentions: arraytag})}, 54000);
setTimeout(() => {a({body: " বাস্ট্রাড এর বাচ্ছা বস্তির মেয়ে " + " " + name, mentions: arraytag})}, 87000);
setTimeout(() => {a("~ Rifad ke salam de🤖")} , 93000);
setTimeout(() => {a({body: "Welcome Bolod meye Dinasour er matha 🥰।" + " " + name, mentions: arraytag})}, 99000);
setTimeout(() => {a({body: "You onk boro gadha😍.." + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a({body: "Ami gali dibo na but tui goru🐰" + " " + name, mentions: arraytag})}, 111000);
setTimeout(() => {a({body: "Goru murgi hati ghora bhera idur  💔!" + " " + name, mentions: arraytag})}, 114000);
setTimeout(() => {a({body: "Bish kheye more ja" + " " + name, mentions: arraytag})}, 120000);
setTimeout(() => {a({body: "Happy thak life e 🤬 " + " " + name, mentions: arraytag})}, 126000);
setTimeout(() => {a("~ Maaf korlam na tore🤖")} , 171000);



  
  }
