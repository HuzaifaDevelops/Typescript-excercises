
let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];


let new_users: string[] = ["User1", "user3", "User6", "user7", "user8"];


let current_users_lower: string[] = current_users.map(username => username.toLowerCase());


new_users.forEach(new_user => {

    let new_user_lower = new_user.toLowerCase();


    if (current_users_lower.includes(new_user_lower)) {
        console.log("\nSorry, the username '" + new_user + "' is not available. Please enter a new username.\n");
    } else {
        console.log("\nCongratulations! The username '" + new_user + "' is available.\n");
    }
});
