import {
  getDateBy_HH_MM,
  checkBetweenTimes,
  checkIfDatesAreEquals,
  checkBetweenDays,
} from "./dateHelpers.js";

//======================================================================= Exports functions
export function checkIfIsOpen(eventList, fromDate, toDate) {
  const planning = eventList.find((event) => event.opening === true);

  // Check if reccuring planning
  if (planning.recurring) {
    // Check if is open only one day in a week
    if (planning.startDate.getDay() === planning.endDate.getDay()) {
      return checkIfIsOpenByDay(planning, fromDate, toDate);
    } else {
      return checkIfIsOpenByMutipleDays(planning, fromDate, toDate);
    }
  } else {
    // Check if the planing is open without reccuring
    if (
      eventList.find(
        (event) =>
          event.startDate.getTime() <= fromDate.getTime() &&
          event.endDate.getTime() >= toDate.getTime()
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export function checkIfIsAvailable(eventList, fromDate, toDate) {
  const planning = eventList.find((event) => event.opening === true);
  const events = eventList.filter((event) => event.opening === false);

  console.log(events);
}

//======================================================================= Internal functions

// Check if the planing is open on a single day
function checkIfIsOpenByDay(planning, fromDate, toDate) {
  // Check if compagny is open the day
  if (
    checkIfDatesAreEquals(
      planning.startDate,
      planning.endDate,
      fromDate,
      toDate
    )
  ) {
    // Check if compagny is open between two times
    return checkBetweenTimes(
      planning.startDate,
      planning.endDate,
      fromDate,
      toDate
    );
  } else {
    return false;
  }
}

// Check is the planning is open on multiple days
function checkIfIsOpenByMutipleDays(planning, fromDate, toDate) {
  // Check if the date are bewteen planning date
  if (
    checkBetweenDays(planning.startDate, planning.endDate, fromDate, toDate)
  ) {
    // Check if compagny is open between two times
    return checkBetweenTimes(
      planning.startDate,
      planning.endDate,
      fromDate,
      toDate
    );
  }
}
