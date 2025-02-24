'use strict'
const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    
    if (document.body.classList.contains('dark-theme')) {
        console.log('current class name: dark-theme');
        this.textContent = "Light";
    } else {
        console.log('current class name: light-theme');
        this.textContent = "Dark";
    }
});
   