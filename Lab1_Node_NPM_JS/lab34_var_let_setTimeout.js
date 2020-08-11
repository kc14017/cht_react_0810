function compareVarLet() {

    for (var i = 0; i < 10; i++) {
        setTimeout(() => { console.log("var, i=", i) }, 1000)
    }
    for (let j = 0; j < 10; j++) {
        setTimeout(()=> console.log("let, j=", j), 1000)
    }
}
compareVarLet()