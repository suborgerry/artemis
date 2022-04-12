const menuBtn = document.querySelector('#menu-button');
const dropdownList = document.querySelector('#mobile-list');

function toggleMenu(evt) {
    const buttonMenu = evt.target.parentElement.matches('button') ? evt.target.parentElement : evt.target.parentElement.parentElement;
    
    buttonMenu.classList.toggle('open');
};

function openItemsMenu(evt) {
    let item = null;
    console.log(item);
    if(evt.target.matches('button')) {
        item = evt.target
    } else if(evt.target.parentElement.matches('button')) {
        item = evt.target.parentElement
    } else if(evt.target.children[0].matches('button')) {
        item = evt.target.children[0];
    }

    item.classList.toggle('open')
};

menuBtn.addEventListener('click', evt => {
    toggleMenu(evt)
});

dropdownList.addEventListener('click', evt => {
    openItemsMenu(evt)
})