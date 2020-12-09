const questions = document.querySelectorAll('.card-right__questions-QUESTION'); 


questions.forEach(el=> {
    el.addEventListener('click', (event)=> {

        questions.forEach(el=> removeSelection(el, event.currentTarget))
        event.currentTarget.lastElementChild.classList.toggle('height')
        event.currentTarget.firstElementChild.firstElementChild.firstElementChild.classList.toggle('boldText')
        event.currentTarget.firstElementChild.lastElementChild.classList.toggle('rotate'); 
        
    });
}); 

function removeSelection(node, current) {

    if (node !== current) {
        node.lastElementChild.classList.remove('height'); 
        node.firstElementChild.firstElementChild.firstElementChild.classList.remove('boldText');
        node.firstElementChild.lastElementChild.classList.remove('rotate');        
    }

}


