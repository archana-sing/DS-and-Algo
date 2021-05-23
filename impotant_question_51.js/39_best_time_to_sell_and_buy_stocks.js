let arr = [1, 5, 2, 3, 7, 6, 4, 5];
let max_profit = 0;
let min = arr[0]; 

// N; // Number of days 

// prices[N]; // stock prices

// min_price; // Minimum value of stock

// max_profit;

// for (int i = 0; i < N; i++) {

//       if (prices[i] < min_price)

//           minprice = prices[i];

//       else if (prices[i] - min_price > max_profit)

//           max_profit = prices[i] - min_price;
//  }


// print(max_profit); 
for(let i = 0 ; i < arr.length ; i++){
    min = Math.min(min , arr[i])
    max_profit = Math.max(max_profit , arr[i] - min)
}
console.log(max_profit)
