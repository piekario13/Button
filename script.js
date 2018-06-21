let list = document.getElementById('list');
let add = document.getElementById('addElem');

add.addEventListener('click', function() {
    let element = document.createElement('li');
    element.innerHTML='item ' + list.getElementsByTagName('li').length;
    list.appendChild(element);
    console.logg(element);
});