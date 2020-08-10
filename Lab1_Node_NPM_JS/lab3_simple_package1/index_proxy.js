var request = require('request')
//var URL = "http://web.chtti.com.tw/"
var URL = "https://www.cwb.gov.tw/V8/C/"
var PROXY_URL = "http://proxy.cht.com.tw:8080"
var proxyRequest = request.defaults({ 'proxy': PROXY_URL })
proxyRequest(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})
console.log("Hi, my program finished")
