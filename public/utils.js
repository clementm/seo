window.http = function http(url, callback) {
  var oReq = new XMLHttpRequest();
  oReq.onload = callback;
  oReq.open('get', url, true);
  oReq.send();
};

window.appendLine = function appenLine(root, text) {
  root.innerHTML = root.innerHTML + '<li><pre>' + text + '</pre></li>';
};

window.startChrono = function() {
  var start = moment();

  function pad(n, width) {
    return (n + '').length >= width ? n : new Array(width - (n + '').length + 1).join('0') + n;
  }

  return function(time) {
    var now = moment(time);
    var duration = moment.duration(now.diff(start));
    return (
      pad(duration.minutes(), 2) +
      ':' +
      pad(duration.seconds(), 2) +
      ':' +
      pad(duration.milliseconds(), 3)
    );
  };
};

window.sleep = function(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {}
}
