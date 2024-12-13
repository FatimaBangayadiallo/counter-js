//select the items
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

//init the count

let count = 0;

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const result = e.currentTarget.classList;
    if(result.contains('decrease')){
        count--;
        value.textContent = count;
        value.style.color = 'red';
    }
    else if(result.contains('reset')){
        count = 0;
        value.textContent = count;
        value.style.color = 'black';

    }
    else{
        count++;
        value.textContent = count;
        value.style.color = 'green';
    }
    
  })
})