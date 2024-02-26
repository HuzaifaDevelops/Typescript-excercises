let usernames: string[] = ["User1", "User2", "Admin", "User3", "User4"];

usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?\n");
  } else {
    console.log("Hello " + username + ", thank you for logging in again.!\n");
  }
});
