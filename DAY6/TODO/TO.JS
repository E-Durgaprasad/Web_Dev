const box =document.getElementById("box");
const list =document.getElementById("list");


function addTask() {
    if(box.value=== ''){
        alert("write somthing!")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=box.value;
        list.appendChild(li);
    }
}