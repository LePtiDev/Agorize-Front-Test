export function getDateBy_HH_MM(date) {
  return date.getTime();
}

// Return true if the date are between the startDate and endDate
export function checkBetweenTimes(startDate, endDate, fromDate, toDate) {
  return (
    getDateBy_HH_MM(startDate) <= getDateBy_HH_MM(fromDate) &&
    getDateBy_HH_MM(endDate) >= getDateBy_HH_MM(toDate)
  );
}

export function checkBetweenDays(startPlanning, endPlanning, fromDate, toDate) {
  return (
    startPlanning.getDay() <= fromDate.getDay() &&
    endPlanning.getDay() >= toDate.getDay()
  );
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
