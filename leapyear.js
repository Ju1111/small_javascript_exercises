const output = year => {
  return leapYear(year) ? `${year} is a leap year.` : `${year} isn't a leap year.`
}

const leapYear = year => {
  if (year % 4 == 0) {
    if (year % 100 == 0 &&) {
      return (year % 400 == 0)
    }
    else
      return true
  } else
      return false
}

console.log(output(2000));
