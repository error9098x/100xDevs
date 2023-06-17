/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  Bill = []
  if (transactions.length>=1){
    Bill.push({ 
                category: transactions[0].category,
                totalSpent: transactions[0].price})
    }

  
    for ( i = 1 ; i < transactions.length ; i++) {
    flag = 0;
    category = transactions[i].category 
    price = transactions[i].price
   
    for ( j = 0 ; j < Bill.length ; j++) {
       if(category==Bill[j].category){
        Bill[j].totalSpent += price;
        flag = 1;
        break;
       }
    }
    
    if(flag==0){
      Bill.push({ 
        category: transactions[i].category,
        totalSpent: transactions[i].price})
       
    }


  }
  return Bill;
}
//	{ category: 'Food', totalSpent: 60 },
// const test = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656105600000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656134400000,
//     price: 30,
//     category: 'Food',
//     itemName: 'Sushi',
//   },
// ];
// console.log(calculateTotalSpentByCategory(test))
module.exports = calculateTotalSpentByCategory;
