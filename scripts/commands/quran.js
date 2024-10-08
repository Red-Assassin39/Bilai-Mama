/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
    name: "Ayat",
    version: "1.0.0", 
    permission: 0,
    credits: "Rifad",
    description: "", 
    prefix: true,
    category: "Random quran ayat",
    usages: "",
    cooldowns: 5, 
    dependencies: {
      }
  };
  
  
  module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
     var hi = ["This is the Book about which there is no doubt, a guidance for those conscious of Allah – Baqarah Ayat 2",
               "“So remember Me; I will remember you. And be grateful to Me and do not deny Me.” Surah Baqarah Verse 152",
               "“He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination” [Quran 64:3]",
               "“My mercy encompasses all things” [Quran 7:156]",
               "“So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief” [Quran 94:5-6]",
               "“And Allah would not punish them while they seek forgiveness” [Quran 8:33]",
               "“Do what is beautiful. Allah loves those who do what is beautiful” [Quran 2:195]",
               "“Allah does not burden a soul beyond that it can bear” [Quran 2:286]",
               "“And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent” [Quran 65:3]",
               "“The truth is from your Lord, so do not be among the doubters” [Quran 3:60]",
               "“Indeed, your enemy is the one cut off.” [Surah Al-Kawthar (108:3)]",
               "“Men are in charge of women by [right of] what Allah has given one over the other and what they spend [for maintenance] from their wealth.” Surah Imran Ayat 34",
               "“And the worldly life is not but amusement and diversion; but the home of the Hereafter is best for those who fear Allah, so will you not reason?” Surah Anam Ayat 32",
               "“Indeed, the mercy of Allah is near to the doers of good.” Surah Anam Ayah 56",
               "“But Allah would not punish them while you, [O Muhammad], are among them, and Allah would not punish them while they seek forgiveness.” Surah Anfal Verse 33",
               "“[Remember] when you asked help of your Lord, and He answered you, “Indeed, I will reinforce you with a thousand from the angels, following one another.” Surah Anfal Verse 9"
               ];
    var know = hi[Math.floor(Math.random() * hi.length)];
    var link = [
    "https://i.postimg.cc/MHn6xzp7/ai-generated-8649249-640.jpg",
    "https://i.postimg.cc/C1PhWRSM/eb9df9ea6a1b83e17aa9b7c3603a8d18.jpg",
  "https://i.postimg.cc/vTCQZC4p/HD-wallpaper-the-power-allah-bangla-black-dark-islamic-lord-moon-world.jpg",
  "https://i.postimg.cc/wjX69fgG/ishan-seefromthesky-66-Tu10-Cx-YY0-unsplash.jpg",
  "https://i.postimg.cc/7YTHWPcD/islamic-new-year-quran-book-with-dates-photo.jpg",
  "https://i.postimg.cc/T3MdMMMb/pexels-photo.jpg",
  "https://i.postimg.cc/5N3VGH3h/1000-F-263360734-mrr1m10m-TZRh7kx2j56-HRV0-FBGv-E0-Rod.jpg",
  "https://i.postimg.cc/fRRNhwqJ/HD-wallpaper-quran-beautiful-dark-flowers-islamic-muslim-thumbnail.jpg",
  "https://i.postimg.cc/T3NXdZBQ/hlgQPU.jpg",
  "https://i.postimg.cc/JhyCGpL8/silhouette-landscape-of-mosque-with-shiny-purple-sky-for-ramadan-design-graphic-in-muslim-culture-an.jpg",
  "https://i.postimg.cc/dVWyHfhr/images-1-21.jpg",
  
  
    
  ];
       var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
     };