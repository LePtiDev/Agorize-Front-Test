import {
  checkIfIsOpen,
  checkIfIsAvailable,
  getAvailabilities,
} from "./functions/eventHelpers.js";

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
    // Check if as already an event
    if (checkIfIsAvailable(eventList, fromDate, toDate)) {
      new Event(false, false, fromDate, toDate); // Intervention scheduled
      console.log("I'm available I add the event !");
    } else {
      // Get the next availabilities
      getAvailabilities(eventList, fromDate, toDate);
      console.log("I'm not available any other time !");
    }
  } else {
    getAvailabilities(eventList, fromDate, toDate);
    console.log("I'm not available any other time !");
  }
  return; //Something awesome;
};

export { Event };
