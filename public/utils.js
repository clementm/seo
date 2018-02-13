window.http = function http (url, callback) {
  var oReq = new XMLHttpRequest();
  oReq.onload = callback;
  oReq.open("get", url, true);
  oReq.send();
}

window.appendLine = function appenLine (root, text) {
  root.innerHTML = root.innerHTML + '<li>' + text + '</li>'
}
