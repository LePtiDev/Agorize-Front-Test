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

  events.forEach((element) => {
    if (
      (element.startDate.getTime() <= fromDate.getTime() ||
        element.endDate.getTime() >= fromDate.getTime()) &&
      (element.startDate.getTime() >= toDate.getTime() ||
        element.endDate.getTime() <= fromDate.getTime())
    ) {
      return true;
    } else {
      return false;
    }
  });
}

export function getAvailabilities(eventList, fromDate, toDate) {
  // Planing
  const planning = eventList.find((el) => el.opening === true);
  const planningStartDate = planning.startDate;
  const planningEndDate = planning.endDate;
  const answer = "I'm available from";
  let dateAvaibilities = planningStartDate;
  let hours = [];

  // Get the available week
  while (dateAvaibilities.getTime() < fromDate.getTime()) {
    dateAvaibilities = new Date(
      dateAvaibilities.getTime() + 7 * 24 * 60 * 60 * 1000
    );
  }

  planningEndDate.setDate(dateAvaibilities.getDate());

  while (dateAvaibilities.getTime() < planningEndDate.getTime()) {
    // Push in to array all min that we have
    hours.push(getDateBy_HH_MM(dateAvaibilities));
    // Add 30 min every loop
    dateAvaibilities = new Date(
      dateAvaibilities.setMinutes(dateAvaibilities.getMinutes() + 30)
    );
  }

  hours[hours.length - 1] = "and " + hours[hours.length - 1];
  console.log(answer + " " + hours.join(", "));
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
