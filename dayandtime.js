const dayAndTime = () => {

  const date = new Date()
  const day = date.getDay()

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const today = weekDays[day]

  const hour = date.getHours() % 12 || 12
  const min = date.getMinutes()
  const sec = date.getSeconds()

  const ampm = (date.getHours() >= 12)? 'PM' : 'AM'

  console.log(`Today is: ${today}.`)
  console.log(`The current time is: ${hour} ${ampm} : ${min} : ${sec}`)
}

dayAndTime()
