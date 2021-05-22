let a = [3, 1, 2, 4, 5];
let area = 0
// for(let i = 0 ; i < a.length ; i++){
//     for(let j = i+1 ; j < a.length ; j++){
//         area = Math.max(area , (j - i) * Math.min(a[i] , a[j]))
//     }
// }
// console.log(area)

let l = 0 , r = a.length -1;
while(l < r){
    area = Math.max(area , (r -l) * Math.min(a[l] , a[r]))
    if(a[l] < a[r]){
        l++
    } 
    else{
        r--
    }
}
console.log(area)