const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
const numberOfSpaces = sampleNews.match(/ /g).length;
console.log("Number of spaces in the string:");
console.log(numberOfSpaces);