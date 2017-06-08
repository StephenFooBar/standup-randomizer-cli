'use strict';
const randomizer = require("./randomizer.js");
let participantList = [];
const add = function(participants) {
  for (let i = 0; i < participants.length; i++)
    participantList.push({
      name:participants[i],
      weight: 1,
      randomValue: 1,
      hasParticipated: false
    });
  return `Successfully added ${participants.length} people to the list.`;
}

const sortDescending = function() {
  participantList.sort((a, b) => b.weight * b.randomValue - a.weight * a.randomValue);
}

const get = function(howMany) {
  if (participantList.length === 0)
    return "There is no one added to the list.";
  if (howMany < 1)
    return "Specify proper value of how many you want to get."
  var randValues = randomizer.getRandomValues(participantList.length);
  for (let i = 0; i < participantList.length; i++)
    participantList[i].randomValue = randValues[i];
  sortDescending();
  var names = "";
  let found = 0;
  for (let i = 0; i < participantList.length; i++) {
    if (!participantList[i].hasParticipated) {
      names += participantList[i].name + " ";
      participantList[i].hasParticipated = true;
      found++;
    }
    if (found === howMany)
      break;
  }
  return found === 0 ? "Everyone has participated. Please reshuffle." : names
}

const reshuffle = function() {
  participantList.forEach((element) => {element.hasParticipated = false;});
  return `Successfully reshuffled ${participantList.length} people in the list.`;
}

module.exports.get = get;
module.exports.add = add;
module.exports.reshuffle = reshuffle;