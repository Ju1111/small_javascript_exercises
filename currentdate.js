const lessThanTen = (x) => {
  return x < 10 ? '0' + x : x
}

const currentDate = () => {

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  console.log(`${lessThanTen(day)}-${lessThanTen(month)}-${year}`)
}

currentDate()
