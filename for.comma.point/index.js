const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`

sumcomma = 0
sumpoint = 0
for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === ",") {
        sumcomma += 1
    }
    else if (sampleNews[i] === ".") {
        sumpoint += 1
    }
}
console.log("Number of commas in the string:");
console.log(sumcomma);
console.log("Number of points in the string:");
console.log(sumpoint);