let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let k =3;
for(let i = 0 ; i <= arr.length - k ; i++){
    let max = arr[i]
    for(let j = 1 ; j < k ; j++){
        if(arr[i + j]> max){
            max = arr[i+j]
        }
        
    }
    console.log(max)
}
//3 4 5 6 7 8 9 10