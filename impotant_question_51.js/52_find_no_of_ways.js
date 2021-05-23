function find_no_of_ways(num){
    if(num < 0){
        return 0
    }
    if(num === 0 || num === 4){
        return 1
    }
   
    if(num === 8){
        return 2
    }
    return find_no_of_ways(num - 8) + find_no_of_ways(num - 4)
}