function isolate (func) {
  try {
    func();
  } catch(e) {}
}

isolate(function () {
  // CAS n°1
  var root = document.getElementById('root');
  root.innerHTML = root.innerHTML + '<li>getElementById puis innerHTML';
});

isolate(function () {
  // CAS n°2
  var root = document.getElementById('root');
  var child = document.createElement('li');
  child.textContent = 'getElementById puis createElement et appendChild';

  root.appendChild(child);
});

isolate(function () {
  // CAS n°3
  var root = document.querySelector('#root');
  root.innerHTML = root.innerHTML + '<li>querySelector puis innerHTML';
});

isolate(function () {
  // CAS n°4
  var root = document.querySelector('#root');
  var child = document.createElement('li');
  child.textContent = 'querySelector puis createElement et appenchild';

  root.appendChild(child);
});
