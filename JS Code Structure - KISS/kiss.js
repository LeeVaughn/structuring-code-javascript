// Here's a variable holding the number 5
const number = 5;

function randomChoice(item) {
  return Math.floor(Math.random() * item.length);
}

// This function checks to see
// if a number is greater then 10
// if it is it will return true
// if it isn't it will return false
function ten(num) {
  //   check if number is greater than 10
  if (num > 10) {
    return true;
  }
  //   if the number is less than 10
  else {
    return false;
  }
}

// calling the check function and
// passing in a number to check
// then printing out the result
console.log(ten(number));

// a function called go to movies
// it randomly chooses a movie
// it picks some snacks for you
// then prints out a message with
// your movie and snacks
function go_to_movies(money) {
  //   list of movies
  const movies = [
    "Parasite",
    "Green Book",
    "The Shape of Water",
    "Moonlight",
    "Spotlight",
    "Birdman",
    "12 Years a Slave",
    "Argo",
    "The Artist",
    "The Kings Speech",
  ];
  //   randomly choose a movie
  const movie_choice = movies[randomChoice(movies)];

  //   dictionary of snacks and amounts
  let purchased_snacks = { popcorn: 0, soda: 0, candy: 0 };
  //   make sure you have money first
  if (money > 0) {
    //     while money is greater then zero
    //     keep buying snacks
    while (money > 0) {
      //       if money is greater than 3
      //       purchase popcorn
      if (money >= 3) {
        purchased_snacks["popcorn"] = purchased_snacks["popcorn"] + 1;
        money = money - 3;
      }
      //       if money is greater than 2
      //       purchase soda
      if (money >= 2) {
        purchased_snacks["soda"] = purchased_snacks["soda"] + 1;
        money = money - 2;
      }
      //       if money is greater than 1
      //       purchase candy
      if (money >= 1) {
        purchased_snacks["candy"] = purchased_snacks["candy"] + 1;
        money = money - 1;
      }
    }
  }
  return `You went to see ${movie_choice} and had ${JSON.stringify(
    purchased_snacks,
    null,
    4
  )}.`;
}

// calling the go to movie function
// and printing the result
console.log(go_to_movies(10));

// list of dictionaries containing some treehouse pets
const pets = [
  { name: "Jethro", animal: "dog", breed: "Australian Shepherd" },
  { name: "Birdie", animal: "dog", breed: "Pointer mix"},
  { name: "Harley", animal: "dog", breed: "Unknown" },
  { name: "Booger", animal: "cat", breed: "Unknown" },
  { name: "Argo", animal: "cat", breed: "Unknown" },
  { name: "Ace", animal: "cat", breed: "Unknown" },
];

// loop through each pet in the list
for (const element of pets) {
  //   loop through each dictionary
  for (const property in element) {
    //     print out the attributes for each pet
    console.log(`${property} : ${element[property]}`);
  }
}
