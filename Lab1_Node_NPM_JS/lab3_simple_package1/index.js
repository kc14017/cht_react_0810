var request = require('request')
var URL = "http://web.chtti.com.tw/"
//var URL = "https://www.cwb.gov.tw/V8/C/"
request(URL, function (error, response, body) { 
    if(!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
