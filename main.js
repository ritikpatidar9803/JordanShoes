const shoes = document.querySelectorAll('.shoe');

shoes.forEach(shoe => {
    shoe.addEventListener('click', () => {
        if(shoe.classList.contains('active')){
            removeUnactiveClasses();
            shoe.classList.remove('active');
        }
        else{
            removeUnactiveClasses();
            removeActiveClasses();
            shoe.classList.add('active');
            shoes.forEach(item => {
                if(!item.classList.contains('active'))
                {
                    item.classList.add("unactive");
                }
            })
        }
       
    })
})

function removeActiveClasses() {
    shoes.forEach( shoe => {
        shoe.classList.remove('active');
    })
}
function removeUnactiveClasses() {
    shoes.forEach( shoe => {
        shoe.classList.remove('unactive');
    })
}