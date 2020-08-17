const fs = require('fs')
const data = 'Node.js 是能夠在伺服器端運行 JavaScript 的開放原始碼、跨平台 JavaScript 執行環境。Node.js 由 Node.js Foundation（已與 JS Foundation 合併為 OpenJS Foundation[3]）持有和維護[4]，亦為 Linux 基金會的專案[5]。Node.js採用Google開發的V8執行程式碼，使用事件驅動、非阻塞和非同步輸入輸出模型等技術來提高效能，可最佳化應用程式的傳輸量和規模。這些技術通常用於資料密集的即時應用程式。 Node.js大部分基本模組都用JavaScript語言編寫。在Node.js出現之前，JavaScript通常作為用戶端程式設計語言使用，以JavaScript寫出的程式常在用戶的瀏覽器上執行。Node.js的出現使JavaScript也能用於伺服器端編程。Node.js含有一系列內置模組，使得程式可以脫離Apache HTTP Server或IIS，作為獨立伺服器執行。'
const writerStream = fs.createWriteStream('lab59_output.txt')
console.log('begin to write')
writerStream.write(data, 'utf8')
console.log('return from write')
writerStream.end()
console.log('writer end returned')

writerStream.on('finish', function () {
    console.log('write complete')
})

writerStream.on('error', function (err) {
    console.log(err.stack)
})
console.log("program ended")
