const changecolor = () => {
    let box = document.getElementById("box")

    colorGen()
    box.style.backgroundColor = colorcode


}

const colorGen = () => {
    let codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    colorcode = "#"
    for (let i=0; i<6;  i++) {
        let randNo = Math.floor(Math.random() * 16)
        colorcode +=codes[randNo]

    }

}