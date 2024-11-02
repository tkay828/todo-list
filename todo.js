const line = document.getElementById("task");
const check = document.getElementById("check");
const input = document.getElementById("input");
        
        
function btn() {
    const li = document.createElement("li");
    const ic = document.createElement("img");
    ic.src= "cancel.png";
    if (input.value != "") {
        li.innerHTML= input.value;
        ic.src= "cancel.png";
       ic.classList.add("ic");
       line.appendChild(li);
       li.appendChild(ic);
       li.classList.add("li");
       ic.addEventListener('click',function(){
        li.remove();
        
    });
    li.addEventListener('click',function(){
        li.classList.toggle("you");
        li.classList.add("see");
    
    });
    } else {
        alert("YOU HAVE TO TYPE SOMETHING");
    } 
 
input.value = "";



}


