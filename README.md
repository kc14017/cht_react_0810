# CHT React & Full Stack

## lab3
* when proxy is required, use
```javascript
var URL = "https://www.cwb.gov.tw/V8/C/"
// define proxt url
var PROXY_URL = "http://proxy.cht.com.tw:8080"
// set a placeholder for proxy usage
var proxyRequest = request.defaults({ 'proxy': PROXY_URL })
// use proxy to connect
proxyRequest(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})
```

## Using babel

* syntax
```
npx babel src\lab1_var_let_const.js
```

## For spring boot in gradle

### enable intelliJ proxt setting

### add `gradle.properties` under `.gradle`
```
systemProp.http.proxyHost=proxy.cht.com.tw
systemProp.http.proxyPort=8080
systemProp.https.proxyHost=proxy.cht.com.tw
systemProp.https.proxyPort=8080
```