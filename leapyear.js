function output(year) {
  return leapYear(year) ? `${year} is a leap year.` : `${year} isn't a leap year.`
}

function leapYear (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      year % 400 ? true : false
    }
    else
      return true
  }
}

console.log(output(2018));
