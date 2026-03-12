// const array = ["welcome", 2312, 34.543, true, "hello", "bye"]
// console.log(array);
// // array.pop();
// // array.push("hi");
// // array.shift();
// array.unshift("coma");
// console.log(array);


// sort array[4,60,7.80,49]
let arr = [10, 5, 25, 1, 40];
for (let i = 0; i < arr.length; i++) 
    {
    for (let j = 0; j < arr.length - 1 - i; j++) 
        {
        if (arr[j] > arr[j + 1])
             {
            // swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);