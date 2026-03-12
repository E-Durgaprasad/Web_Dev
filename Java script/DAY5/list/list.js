var movies = ["KGF", "SALAR", "Bahubali", "Orange"];

var list = document.getElementById("list");

var listitems=() =>{
    for (var i = 0; i < movies.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = movies[i];
        list.appendChild(li);
    }

}

var THEATER= ["PURNA", "MAHESHWARI", "VISHWARUPA", "MYTRI"];

var list = document.getElementById("list");

var listitems1=() =>{
    for (var i = 0; i < THEATER.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = THEATER[i];
        list.appendChild(li);
    }

}

