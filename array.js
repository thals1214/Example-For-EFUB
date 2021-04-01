const arr = [1,2,3,4,5];

const mult_arr = arr.map(num => num*3);

for(let i = 0; i<arr.length; i++){
    if(mult_arr %2 == 0) console.log(arr[i]);
}