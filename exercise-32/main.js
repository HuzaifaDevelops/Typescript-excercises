var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["User1", "user3", "User6", "user7", "user8"];
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
new_users.forEach(function (new_user) {
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("\nSorry, the username '" + new_user + "' is not available. Please enter a new username.\n");
    }
    else {
        console.log("\nCongratulations! The username '" + new_user + "' is available.\n");
    }
});
