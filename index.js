const open = require("open");
const links = require("./links.js");
const browser_name = "firefox";

console.log(links);

async function run(){
  for(let i = 0; i < links.length; i++){
    await open(`https://www.google.co.jp/search?q=${links[i]}&source=lnms&tbm=isch`, {app: browser_name});
  }
}

run();
