const myname = "Jayant";

let index = Math.floor(Math.random() * 10 + 1);

index = index % myname.length;
console.log(myname.charAt(index));
