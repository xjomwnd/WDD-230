const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const main = document.querySelector("main");

btn.addEventListener('click', function(){
    const p =document.querySelector('p');
    p.remove();
 
     let myValue = input.value;
     input.focus();
     input.value  = '';
     if( myValue === ''){
         const error = document.createElement("p");
         error.textContent = 'Please enter a favorite book and chapter e.g. "1 nephi 1"';
         main.appendChild(error);
     }
     else{
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        ul.appendChild(li);
        li.textContent = myValue;      
        li.appendChild(delBtn);
        delBtn.textContent = '❌';
        
        
        delBtn.addEventListener('click', function(){
            li.remove();
        })
       
     }
 })