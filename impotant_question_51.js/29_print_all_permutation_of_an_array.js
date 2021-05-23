// Time Complexity:

// O(N*N!), where N is the size of array
// Space Complexity:

// O(N), Extra call stack memory required.

let arr = [0, 1, 2];
let l = 0;
let r = arr.length -1;

function generate_permutation(arr , l , r){
    if(l === r){
        console.log(arr.join(" "))
    }
    for(let i = l ; i <= r ; i++){
        //console.log(l , i)
        let t = arr[l];
        arr[l] = arr[i]
        arr[i] = t
        generate_permutation(arr , l+1 , r)
        t = arr[l];
        arr[l] = arr[i]
        arr[i] = t
    }
}
// function generate_permutations(arr , per , visited){
//     if(per.length === arr.length){
//         console.log(per.join(" "))
//     }
    
//     for(let i = 0 ; i < arr.length ; i++){
//        if(visited[i] === true){
//            continue
//        }
//         per.push(arr[i])
//         visited[i] = true
//         generate_permutations(arr , per , visited)
//         per.pop();
//         visited[i] = false
       
//     }
// }
generate_permutation(arr , l , r)

// 0 1 2
// 1 0 2
// 0 2 1
// 2 0 1
// 1 2 0
// 2 1 0