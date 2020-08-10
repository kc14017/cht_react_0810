var negatives = [undefined, false, 0, null, NaN, ""]

for (i = 0; i < negatives.length; i++) {
    for (j = i + 1; j < negatives.length; j++) {
        console.log(negatives[i], '==', negatives[j], negatives[i] == negatives[j])
    }

}
console.log('---------------------------------')
for (i = 0; i < negatives.length; i++) {
    for (j = i + 1; j < negatives.length; j++) {
        console.log(negatives[i], '===', negatives[j], negatives[i] === negatives[j])
    }

}