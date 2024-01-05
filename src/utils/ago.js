export function getAgo(time) {
  const givenDate = new Date(time);
  const currentDate = new Date();

  const timeDifference = currentDate - givenDate;

  const millisecondsInMinute = 60 * 1000;
  const millisecondsInHour = 60 * millisecondsInMinute;
  const millisecondsInDay = 24 * millisecondsInHour;
  const millisecondsInWeek = 7 * millisecondsInDay;
  const millisecondsInMonth = 30.44 * millisecondsInDay; // Approximate value
  const millisecondsInYear = 365.25 * millisecondsInDay; // Approximate value

  const minutesDifference = Math.floor(timeDifference / millisecondsInMinute);
  const hoursDifference = Math.floor(timeDifference / millisecondsInHour);
  const daysDifference = Math.floor(timeDifference / millisecondsInDay);
  const weeksDifference = Math.floor(timeDifference / millisecondsInWeek);
  const monthsDifference = Math.floor(timeDifference / millisecondsInMonth);
  const yearsDifference = Math.floor(timeDifference / millisecondsInYear);

  let timeAgo;

  if (yearsDifference > 0) {
    timeAgo = `${yearsDifference} year${yearsDifference > 1 ? "s" : ""}`;
  } else if (monthsDifference > 0) {
    timeAgo = `${monthsDifference} month${monthsDifference > 1 ? "s" : ""}`;
  } else if (weeksDifference > 0) {
    timeAgo = `${weeksDifference} week${weeksDifference > 1 ? "s" : ""}`;
  } else if (daysDifference > 0) {
    timeAgo = `${daysDifference} day${daysDifference > 1 ? "s" : ""}`;
  } else if (hoursDifference > 0) {
    timeAgo = `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""}`;
  } else {
    timeAgo = `${minutesDifference} minute${minutesDifference > 1 ? "s" : ""}`;
  }

  return timeAgo;
}
