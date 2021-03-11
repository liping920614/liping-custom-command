var yargs = require('yargs');
var lib = require('liping-nodelib');
// 主运行程序
const argv= yargs.alias('f', 'fromFilePath').alias('t', 'targetName').alias('o','fun').argv
const from = argv.fromFilePath
const to = argv.targetName
const o = argv.fun
if(from && to && o){
  if(o === 'string'){
    lib.fileToStringFile(from,to)
  }else if(o === 'source'){
    lib.stringFileToFile(from,to)
  }else {
    console.log('-o参数只能是string或source')
  }
}else{
  console.log(`
  命令需要三个参数分别是：
  -f:输入的文件,带有完整文件路径的路径字符串
  -t:输出到当前路径的文件名不包含后缀
  -o:-o代表转换类型,为string表示将资源文件转换为base64字符串文件,为source表示转换为资源文件。
  `)
}

