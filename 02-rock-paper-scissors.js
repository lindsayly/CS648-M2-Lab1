//phase 1: get user's choice
function userChoice() {
    "use strict";
    var user = window.prompt("Pick rock, paper, or scissors.");
    while (user !== "rock" && user !== "paper" && user !== "scissors") {
        user = window.prompt("That was not a valid entry. Please pick rock, paper, or scissors.");
    }
    return user;
}

//phase 2: get computer choice
function computerChoice() {
    "use strict";
    var cpu = Math.random();
    if (cpu <= 0.33) {
        cpu = "rock";
    } else if (cpu > 0.33 && cpu <= 0.66) {
        cpu = "paper";
    } else {
        cpu = "scissors";
    }
    return cpu;
}

//phase 3: determine winner
function findWinner(user, cpu) {
    "use strict";
    if (user === "rock") {
        if (cpu === "rock") {
            window.alert("It was a tie, try again.");
        } else if (cpu === "paper") {
            window.alert("Computer wins!");
        } else {
            window.alert("You win!");
        }
    } else if (user === "paper") {
        if (cpu === "rock") {
            window.alert("You win!");
        } else if (cpu === "paper") {
            window.alert("It was a tie, try again.");
        } else {
            window.alert("Computer wins!");
        }
    } else {
        if (cpu === "rock") {
            window.alert("You win!");
        } else if (cpu === "paper") {
            window.alert("It was a tie, try again.");
        } else {
            window.alert("Computer wins!");
        }
    }
}

do {
    //promting for userChoice
    var user = userChoice();
    //determining computerChoice
    var cpu = computerChoice();
    //comparing userChoice and computerChoice
    findWinner(user, cpu);
} while (user === cpu);