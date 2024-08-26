//your JS code here. If required.
const divEle = document.getElementById("browser-info");

let version = navigator.appVersion;
let name = navigator.appName
divEle.innerText=`You are using ${name} version${version}`