import { checkIfIsOpen, checkIfIsAvailable } from "./functions/eventHelpers.js";
var eventList = [];

var Event = function (opening, recurring, startDate, endDate) {
  this.opening = opening;
  this.recurring = recurring;
  this.startDate = startDate;
  this.endDate = endDate;
  eventList.push(this);
};

Event.prototype.availabilities = function (fromDate, toDate) {
  // Check if open
  if (checkIfIsOpen(eventList, fromDate, toDate)) {
    console.log("The compagny is open");
    if (checkIfIsAvailable(eventList, fromDate, toDate)) {
      console.log("The compagny is available");
    } else {
      console.log("The compagny is not available");
    }
  } else {
    console.log("The compagny is close");
  }
  return; //Something awesome;
};

export { Event };
