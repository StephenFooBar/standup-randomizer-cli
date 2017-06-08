'use strict';
const invalidCommand = () => {
  return {action: "invalid"};
}

const getTokens = (args) => {
  if (!args || args.length < 1)
    return null;
  let tokens = (args.match(/\S+/g));
  if (tokens.length === 0)
    return null;
  return tokens;
}

const getParameters = (tokens) => {
  return tokens.slice(1);
}

const parseCommand = (args) => {
  const tokens = getTokens(args);
  if (!tokens)
    return invalidCommand();
  var command = {};
  command.action = tokens[0];
  switch (command.action) {
    case "add":
    case "get":
    case "set":
      command.params = getParameters(tokens);
      break;
    case "reshuffle":
    case "exit":
      break;
    default:
      return invalidCommand();
  }
  return command;
}

module.exports = parseCommand;