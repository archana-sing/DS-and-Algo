let n = 15;
for(let i = 1 ; i <= n ; i++){
    if(i % 15 === 0){
        console.log("FizBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fiz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}