import { Event } from "./event.js";

var startDate = new Date(2016, 6, 1, 10, 30); // July 1st, 10:30
var endDate = new Date(2016, 6, 1, 14, 0); // July 1st, 14:00

new Event(true, true, startDate, endDate); // weekly recurring opening in calendar

startDate = new Date(2016, 6, 8, 11, 30); // July 8th 11:30
endDate = new Date(2016, 6, 8, 12, 30); // July 8th 12:30
new Event(false, false, startDate, endDate); // intervention scheduled

var fromDate = new Date(2016, 6, 4, 10, 0); // July 4th 10:00
var toDate = new Date(2016, 6, 10, 10, 0); // July 10th 10:00

Event.prototype.availabilities(fromDate, toDate);
