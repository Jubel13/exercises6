let arrayStudent = [
  {
    Name: "James",
    Email: "james@email.com",
    Age: 30,
    Score: 70,
  },
  {
    Name: "James",
    Email: "james@email.com",
    Age: 40,
    Score: 60,
  },
  {
    Name: "James",
    Email: "james@email.com",
    Age: 60,
    Score: 80,
  },
  {
    Name: "James",
    Email: "james@email.com",
    Age: 50,
    Score: 90,
  },
];

function calculateData(arr) {
  let result = {
    Score: {
      Highest: 0,
      Lowest: 0,
      Average: 0,
    },
    Age: {
      Highest: 0,
      Lowest: 0,
      Average: 0,
    },
  };

  let score = [];
  let age = [];
  for (const student of arr) {
    score.push(student.Score);
    age.push(student.Age);
  }

  score.sort((a, b) => a - b);
  age.sort((a, b) => a - b);
  result.Score.Highest = score[score.length - 1];
  result.Score.Lowest = score[0];
  result.Age.Highest = age[age.length - 1];
  result.Age.Lowest = age[0];

  let sumScore = 0;
  for (let data of score) {
    sumScore += data;
  }

  let avgScore = sumScore / score.length;

  result.Score.Average = avgScore;

  let sumAge = 0;
  for (let data of age) {
    sumAge += data;
  }

  let avgAge = sumAge / score.length;

  result.Age.Average = avgAge;
  return result;
}

console.log(calculateData(arrayStudent));

//2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.product = { data: [], quantity: 0 };
  }

  addToCart(name, price) {
    let product = new Product(name, price);
    this.product.data.push(product);
    this.product.quantity++;

    this.total += price;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    return this;
  }
}

let transaction1 = new Transaction();

transaction1.addToCart("Buku", 15000);
transaction1.addToCart("Buku", 10000);

transaction1.addToCart("Buku", 13000);

console.log(transaction1.showTotal());

console.log(transaction1.checkout());
