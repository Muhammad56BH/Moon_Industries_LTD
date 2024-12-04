
const candidates = ["Alice", "Bob", "Charlie"];
let votes = [0, 0, 0]; 
let userVotes = {}; 


function castVote(candidateName, userId) {

    if (userVotes[userId]) {
        console.log("Duplicate vote detected! You have already voted.");
        return;
    }
    
    const candidateIndex = candidates.indexOf(candidateName);
    if (candidateIndex === -1) {
        console.log("Invalid candidate name. Please vote for a valid candidate.");
        return;
    }

    votes[candidateIndex] += 1;
    userVotes[userId] = true;
}

function displayVotes() {
    console.log("Current Vote Counts:");
    candidates.forEach((candidate, index) => {
        console.log(`${candidate}: ${votes[index]} votes`);
    });
}

function displayWinner() {
    let maxVotes = Math.max(...votes);
    let winners = candidates.filter((_, index) => votes[index] === maxVotes);

    if (winners.length === 1) {
        console.log(`Leading candidate: ${winners[0]} with ${maxVotes} votes`);
    } else {
        console.log(`It's a tie between: ${winners.join(", ")} with ${maxVotes} votes each`);
    }
}


function resetVotes() {
    votes = votes.map(() => 0);
    userVotes = {};
    console.log("Votes have been reset for a new election.");
}

castVote("Alice", "user1");  
castVote("Bob", "user2");    
castVote("Alice", "user3");  
castVote("Alice", "user1");  

displayVotes();             
displayWinner();            

resetVotes();               
displayVotes(); 