//Muhammad Huzaifa

//So this programs contain a function and requires an argument of string and this function simply convert the string into Title Case..

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let username: string = toTitleCase("mUhammaD hUzaIfa");
console.log(username);
