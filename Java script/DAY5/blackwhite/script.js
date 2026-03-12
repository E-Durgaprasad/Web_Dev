const botton =document.getElementById("colorBtn");
const container =document.body

const color = [
        "black",
        "white"
    ];
let index =0;


var change =() => {
    container.style.backgroundColor = color[index] ;
    index++;
    if (index>=color.length) {
        index=0;
    }
}