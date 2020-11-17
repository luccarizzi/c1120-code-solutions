/* exported orderHistory */

// order 1

var order1item1 = {
  item: "GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)",
  author: "",
  returnWindow: "Return window closed on Aug 4, 2020",
  cost: 94.95
}

var order1item2 = {
  item: "The Art os Sql",
  author: "Faroult, Stephane",
  returnWindow: "Return window closed on Aug 4, 2020",
  cost: 33.99
}

var order1 = {
  orderPlaced: "July 3, 2020",
  total: 138.93,
  shipTo: "JS Masher",
  orderNum: "113-2883177-2648248",
  delivered: "Jul 5, 2020",
  items: [order1item1, order1item2]
};

// order 2

var order2item1 = {
  item: "Gamecube Controller Adapter. Super Smash Bros Switch Gambecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter",
  author: "",
  returnWindow: "Return window closed on Aug 5, 2020",
  cost: 15.98
}

var order2 = {
  orderPlaced: "July 4, 2020",
  total: 17.22,
  shipTo: "JS Masher",
  orderNum: "114-2875557-9059409",
  delivered: "Jul 7, 2020",
  items: [order2item1]
};

// order 3

var order3item1 = {
  item: "The Timeless Way of Building",
  author: "Alexander, Christopher",
  returnWindow: "Return window closed on Aug 19, 2020",
  cost: 41.33
}

var order3 = {
  orderPlaced: "July 19, 2020",
  total: 44.53,
  shipTo: "JS Masher",
  orderNum: "113-9984268-1280257",
  delivered: "Jul 20, 2020",
  items: [order3item1]
};

// order 4

var order4item1 = {
  item: "JavaScript for impatient programmers",
  author: "Rauschmayer, Dr. Axel",
  returnWindow: "Return window closed on Sep 7, 2020",
  cost: 31.55
}

var order4 = {
  orderPlaced: "August 4, 2020",
  total: 34.00,
  shipTo: "JS Masher",
  orderNum: "114-3941689-8772232",
  delivered: "Aug 8, 2020",
  items: [order4item1]
};

// final

var orderHistory = [
  order1,
  order2,
  order3,
  order4
];

console.log(orderHistory);
