/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [transactions.category];
// }

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  // Iterate through transactions
  transactions.forEach(transaction => {
      const { category, price } = transaction;
      
      // Check if category already exists
      if (totalSpentByCategory.hasOwnProperty(category)) {
          // Add price to existing total
          totalSpentByCategory[category] += price;
      } else {
          // Create new category with price
          totalSpentByCategory[category] = price;
      }
  });

  // Transform object into array of objects
  const result = Object.keys(totalSpentByCategory).map(category => ({
      category,
      totalSpent: totalSpentByCategory[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;


// module.exports = calculateTotalSpentByCategory;


const transactions = [{
  id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'StreetFood',
		itemName: 'vadapaw',
},
{
  id: 2,
		timestamp: 1656076800000,
		price: 20,
		category: 'Food',
		itemName: 'Pizza',
},
{
  id: 1,
		timestamp: 1656076800000,
		price: 30,
		category: 'FancyFood',
		itemName: 'burger',
}]
