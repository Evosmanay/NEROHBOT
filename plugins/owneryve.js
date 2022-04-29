let handler = function (m) {
	this.sendContact(m.chat, '6285751516419', 'Owner Bot Dayat :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
