const faCloneIcon = document.querySelector('.fa-clone');
const inputTag = document.querySelector('.form-control');
const copyList = document.querySelector('.dropdown-menu');
const lists = document.querySelectorAll('.dropdown-item');

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click',() => {
        copyList.classList.remove("dropdown-menu-transition");
        const copiedText = inputTag.value;
        console.log(lists[i],copiedText);
    });  
}

faCloneIcon.addEventListener('click',() => { 
    copyList.classList.add('dropdown-menu-transition');
});


