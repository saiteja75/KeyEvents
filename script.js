let container = document.getElementsByClassName('container')[0]

window.addEventListener('keyup', function(e) {
    container.innerHTML = `<div class='keyCodes'>
    <h2>${e.key}</h2><small>event.key</small></div>
    <div class='keyCodes'>
    <h2>${e.keyCode}</h2><small>event.keyCode</small></div>
    <div class='keyCodes'>
    <h2>${e.code}</h2><small>event.code</small></div>`;
})