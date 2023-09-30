export function compare(from: Date, date: number, to: Date): boolean {
  from.setUTCHours(0, 0, 0, 0);
  to.setUTCHours(23, 59, 59, 999);

  console.log(from, date, to);
  console.log(from.getTime(), date, to.getTime());

  return from.getTime() <= date && date <= to.getTime();
}

export function dateInDay(day: Date, date: number): boolean {
  return compare(day, date, day);
}

export function dateInWeek(week: Date, date: number): boolean {
  let startDate = week.getDate() - week.getDay();

  let from: Date = new Date(week);
  from.setDate(startDate);

  let to: Date = new Date(week);
  to.setDate(startDate + 6);

  return compare(from, date, to);
}

export function dateInMonth(month: Date, date: number): boolean {
  let from: Date = new Date(month);
  from.setDate(1);

  let to: Date = new Date(month);
  to.setUTCMonth(month.getMonth() + 1, 0);

  return compare(from, date, to);
}

export function dateInYear(year: Date, date: number): boolean {
  let from: Date = new Date(year);
  from.setUTCMonth(0, 1);

  let to: Date = new Date(year);
  to.setUTCMonth(11, 31);

  return compare(from, date, to);
}
