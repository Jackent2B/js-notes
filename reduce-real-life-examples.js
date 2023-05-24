const user = [
  { firstName: "Jayant", lastName: "Khandelwal", age: 26 },
  { firstName: "Akshay", lastName: "Saini", age: 57 },
  { firstName: "Rahul", lastName: "Malhotra", age: 26 },
];

// return list of user with first name and last name
const fulllist = user.reduce(function (acc, cur) {
  let fullname = cur.firstName + cur.lastName;
  acc.push(fullname);
  return acc;
}, []);

console.log(fulllist);

// return how many people are there with the same age
const ageMap = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageMap);

// first name of all the people whose name is less than 30
const output = user.filter((x) => x.age < 30).map((i) => i.firstName);
console.log(output);

const result = user.reduce(function (acc, cur) {
  if (cur.age < 30) {
    acc.push(cur.firstName);
  }
  return acc;
}, []);
console.log(result);
