'use strict';
const readline = require('readline');
const parser = require('./command-parser.js');
const randomizer = require('./randomizer.js');
const participant = require('./participant.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const processCommand = function(command) {
  switch (command.action) {
    case "add": 
      console.log(participant.add(command.params));
      break;
    case "get":
      console.log(participant.get(~~command.params[0]));
      break;
    case "reshuffle":
      console.log(participant.reshuffle());
      break;
      //TODO: 
      // add options to give weights to each participant
      // add options to turn off participation check
      // The default convention is no weight and one who has participated already can't go again until everyone had a chance to participate
  }
}
const run = function() {
  console.log("Standup Randomizer starting...");
  console.log("Type your command:");
  let input = "";
  rl.on('line', (input) => {
    const command = parser(input);
    if (command.action === "exit")
      rl.close();
    if (command.action === "invalid") {
      console.log(`You entered: ${input}`);
      console.log("That is an invalid command. Please try again.");
    }
    processCommand(command);
  });
};
run();