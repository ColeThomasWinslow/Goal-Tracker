export function DayCalc(startingDate, endingDate) {
  var Difference_In_Time = endingDate.getTime() - startingDate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
}
