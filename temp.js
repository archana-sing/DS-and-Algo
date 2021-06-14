
// function getPairsCount(arr, n, sum)
// {
//     let m = {}
 
//     // Store counts of all elements in map m
//     for (let i = 0; i < n; i++)
    
//     {if(!m[arr[i]]){
        
//         m[arr[i]] = 1
//     }
//     else{
//         m[arr[i]]++
//     }}
       
//  console.log(m)
//     let twice_count = 0;
 
//     for (let i = 0; i < n; i++) {
//         twice_count += m[sum - arr[i]];
//         if (sum - arr[i] == arr[i])
//             twice_count--;
//     }
 
//     // return the half of twice_count
//     console.log(twice_count)
//     return twice_count / 2;
// }
 

//     let arr= [ 1, 5, 7, -1, 5 ];
//     let sum = 6;
//     console.log(getPairsCount(arr, arr.length, sum));












let person = {
  name: "Messi",
};
function change(n) {
  this.name = n;
}
var x = change.bind(person, "Ronaldo");
console.log(person.name , "line 1");
change.call(person, "Neymar");

x();
console.log(person.name,"line 58");



































    