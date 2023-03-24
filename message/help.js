import moment from "moment-timezone"
import fs from "fs"
import chalk from 'chalk'
import ms from "parse-ms"
import {runtime,kyun} from "../lib/myfunc.js" 
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*Error* ❌"
let no =""


const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}

const app = `*▸*`
const apz = `*❏*`


export const allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
return `*${botName}*
${week}, ${calender} 

 ❏ Running On : *${runWith}*
 ❏ Mode : ${publik ? "Public" : "Self"}
 ❏ Time : ${timeWib} WIB 
 ❏ Islamic : ${dateIslamic}
 ❏ Hit Today : ${thisHit.toLocaleString()}
 ❏ Total Feature : ${totalFitur()}
 ❏ Total Error : ${db.data.listerror.length}
 ❏ Total User : ${Object.keys(db.data.users).length}
 ❏ User Banned : ${db.data.banned.length}
					    `}

export const fitur = (prefix) => {
const data = global.db.data.others['newinfo']
const info = data ? data.info : ""

const timeInfo = data ? clockString(new Date - data.lastinfo)  : "tidak ada"
  
return`
${apz} *NEWW FITUR
${app} tts
${app} openai
${app} ai
${app} aiimage
${app} jadianime


${apz} *MENU DOWNLOAD*
${app} fb
${app} ig
${app} play
${app} tiktok
${app} twitter
${app} sfile
${app} zippy
${app} song
${app} mediafire
${app} gitclone
${app} ytmp4
${app} ytmp3
${app} gdrive
${app} whatmusic


${apz} *MENU STICKER*
${app} s
${app} gura
${app} doge
${app} patrick
${app} kiss
${app} bite
${app} yeet
${app} neko
${app} bully
${app} bonk
${app} wink
${app} poke
${app} nom
${app} slap
${app} smile
${app} wave
${app} awoo
${app} blush
${app} smug
${app} glomp
${app} happyy
${app} dance
${app} cringe
${app} cuddle
${app} highfive
${app} shinobu 
${app} megumin
${app} handhold


${apz} *MENU GROUP*
${app} kick
${app} add
${app} promote
${app} demote
${app} closetime
${app} opentime
${app} revoke
${app} hidetag
${app} listoline
${app} afk
${app} ceksewa
${app} cekprem 
${app} ceklimit 
${app} ban
${app} unban
${app} listban
${app} addkick
${app} delkick
${app} moveongc
${app} out


${apz} *RANDOM FOTO*
${app} art
${app} awoo
${app} bts
${app} cecan
${app} cogan
${app} elaina
${app} exo
${app} elf
${app} estetic
${app} kanna
${app} loli
${app} neko
${app} waifu
${app} shota
${app} husbu
${app} Sagiri
${app} shinobu
${app} megumin
${app} wallnime
${app} quotesimage


${apz} *NFWS MENU*
${app} bj
${app} ero
${app} cum
${app} feet
${app} yuri
${app} trap
${app} lewd
${app} feed
${app} eron
${app} solo
${app} gasm
${app} poke
${app} anal
${app} holo
${app} tits
${app} kuni
${app} kiss
${app} erok
${app} smug
${app} baka
${app} solog
${app} feetg
${app} lewdk
${app} waifu
${app} pussy
${app} femdom
${app} cuddle
${app} hentai
${app} eroyuri
${app} cum_jpg
${app} blowjob
${app} erofeet
${app} holoero
${app} classic
${app} erokemo
${app} fox_girl
${app} futanari
${app} lewdkemo
${app} wallpaper
${app} pussy_jpg
${app} kemonomimi
${app} nsfw_avatar
${app} chiisaihentai
${app} trap
${app} blowjob
${app} yaoi
${app} ecchi
${app} hentai
${app} ahego
${app} hololewd
${app} sideoppai
${app} animefeets
${app} animebooty
${app} animethighss
${app} hentaiparadise
${app} animearmpits
${app} hentaifemdom
${app} lewdanimegirls
${app} biganimetiddies
${app} animebellybutton
${app} hentai4everyone

${apz} *MENU TOOLS*
${app} ttp
${app} attp
${app} resize
${app} inspect
${app} tr
${app} ss
${app} runtime
${app} speed
${app} ping
${app} rules
${app} speedest
${app} volume
${app} transfer


${apz} *MENU COVERTER*
${app} tomp3
${app} tomp4
${app} toimg
${app} togif
${app} toptt


${apz} *TEXT PROME
${app} pornhub
${app} glitch
${app} avenger
${app} space
${app} ninjalogo
${app} marvelstudio
${app} lionlogo
${app} wolflogo
${app} steel3d
${app} wallgravity
${app} blackpink
${app} neon
${app} greenneon
${app} advanceglow
${app} futureneon
${app} sandwriting
${app} sandsummer
${app} sandengraved
${app} metaldark
${app} neonlight
${app} holographic
${app} text1917
${app} minion
${app} deluxesilver
${app} newyearcard
${app} bloodfrosted
${app} halloween
${app} jokerlogo
${app} fireworksparkle
${app} natureleaves
${app} bokeh
${app} toxic
${app} strawberry
${app} box3d
${app} roadwarning
${app} breakwall
${app} icecold
${app} luxury
${app} cloud
${app} summersand
${app} horrorblood
${app} thunder


${apz} *PHOTO OXY*
${app} shadow 
${app} cup 
${app} cup1
${app} romance
${app} smoke
${app} burnpaper
${app} lovemessage
${app} undergrass
${app} love
${app} coffe
${app} woodheart
${app} woodenboard
${app} summer3d
${app} wolfmetal
${app} nature3d
${app} underwater
${app} golderrose
${app} summernature
${app} letterleaves
${app} glowingneon 
${app} fallleaves
${app} flamming
${app} harrypotter
${app} carvedwood


${apz} *PHOTO 360*
${app} wetglass
${app} multicolor3d
${app} watercolor
${app} luxurygold
${app} galaxywallpaper
${app} lighttext
${app} beautifulflower
${app} puppycute
${app} royaltext
${app} heartshaped
${app} birthdaycake
${app} galaxystyle
${app} hologram3d
${app} greenneon
${app} glossychrome
${app} greenbush
${app} metallogo
${app} noeltext
${app} glittergold
${app} textcake
${app} starsnight
${app} wooden3d
${app} textbyname
${app} writegalacy
${app} galaxybat
${app} snow3d
${app} birthdayday
${app} goldplaybutton
${app} silverplaybutton
${app} freefire
${app} arcade8bit
${app} battlefield4
${app} pubg


${apz} *MENU STORAGE*
${app} addvn
${app} addstik
${app} delvn 
${app} delstik
${app} liststik
${app} listvn 
${app} getallstik 


${apz} *MENU DATABASE*
${app} addcmdowner
${app} addcmdlimit
${app} addcmdprem
${app} addowner
${app} addprem
${app} addsewa
${app} blockcmd
${app} unblockcmd
${app} delowner
${app} delprem
${app} delowner
${app} delcmdowner
${app} delcmdlimit
${app} delcmdprem
${app} listcmdowner
${app} listblockcmd
${app} listprem
${app} listsewa
${app} listowner
${app} listcmdlimit


${apz} *SETTING BOT*
${app} setmenu
${app} setnamebot
${app} setppbot
${app} setimgreply
${app} setimgquoted
${app} setimgdoc   


${apz} *MENU GAME*
${app} family100
${app} math
${app} caklontong


${apz} *MENU DEPELOVER*
${app} banchat
${app} public
${app} self
${app} > evalcode
${app} $ executor
${app} join
${app} bcgc
${app} ambilcase
${app} getfile
${app} restart
${app} delsampah
${app} delchat
${app} listblock
${app} sendbug
${app} savefile
${app} buggc
${app} out
${app} Verify
${app} listgc


❏ *THANKS TO* 

• dittaz 
• irfan haryanto
• lana botz
• Reii
• Vynaa

`+'𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘕𝘰𝘥𝘦𝘫𝘴'
}
// !! JANGAN DI HAPUS THANKS TO !!
// SCRIPT DI KEMBANGKAN OLEH : LANA DEV
// MEMAKAI BASE DITAZ
// EROR?? WA : 081775445373
// JANGAN DI HAPUS
// JUAL SCRIPT?? NERAKA PALING BAWAH!!

//===================//
  //https://maulanabot.my.id//



