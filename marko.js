const compiler = require('@marko/compiler');
const fs = require('fs');
const { SourceMap } = require('module');

function resolveVirtualDependency(){
 
}

const syncResult = compiler.compileFileSync("./temp.marko", {
  output: 'html',
  modules:'cjs' 

});

console.log(syncResult.code)
fs.writeFileSync('d.js', syncResult.code)

