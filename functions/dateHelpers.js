export function getDateBy_HH_MM(date) {
  return date.toLocaleTimeString("fr", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Return true if the date are between the startDate and endDate
export function checkBetweenTimes(startDate, endDate, fromDate, toDate) {
  return (
    startDate.getTime() <= fromDate.getTime() &&
    endDate.getTime() >= toDate.getTime()
  );
}

export function checkBetweenDays(start, end, fromDate, toDate) {
  return start.getDay() <= fromDate.getDay() && end.getDay() >= toDate.getDay();
}

// Return true if the date are equals
export function checkIfDatesAreEquals(
  startPlanning,
  endPlanning,
  fromDate,
  toDate
) {
  return (
    startPlanning.getDay() === fromDate.getDay() &&
    endPlanning.getDay() === toDate.getDay()
  );
}
