// 1 2 3
// 4 5 6 
// 7 8 9

let mat = [[1,2,3] , [11,5,6] ,[3,5,10]]
//transpose of a matrix

for(let i = 0 ; i < mat.length ; i++){
    for(let j = i ; j < mat[0].length ; j++){
        let t = mat[j][i];
        mat[j][i] = mat[i][j];
        mat[i][j] = t
    }
}

//reverse te columns
for(let i = 0 ; i < mat[0].length ; i++){
    for(let j = 0 , k = mat[0].length-1 ; j < k ; j++ , k--){
        let t = mat[j][i];
        mat[j][i] = mat[k][i];
        mat[k][i] = t
    }
}

console.log(mat)