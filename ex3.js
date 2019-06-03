var input = process.argv.slice(2);
var result = input.map(char => char[0]).reduce((x,y)=>x+y);
console.log(`[${input}] becomes "${result}"`);
