module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080803245939") {
    var aid = ["100080803245939"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mention_দিস না _রিফাদ বস এর মন মন ভালো নেই আজকে-!💔🥀","আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣"," Mention_দিলে থাপ্পড় মেরে চেহারার কালার change কইরা লামু 😾😾🔨","রিফাদ বস এখন ব্যস্ত জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া সিংগেল রিফাদ রে একটা গফ দে 😒 😏","Mention_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mention_দিস না বাঁলপাঁক্না রিফাদ প্রচুর বিজি 🥵🥀🤐"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
