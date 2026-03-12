// const callBackFun=()=>{
//     console.log('hello')
// }

// setTimeout(callBackFun,2000)
// setInterval(callBackFun,1000)


fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res=> res.json())
    .then(data => console.log(data.id0))
    .catch(err => console.log(err))



async function fun() {
    try{
        let Api = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        let res = await Api.json()
        console.log(res);

    }catch(err){
        console.log(err.name);
    }
    
}

fun()