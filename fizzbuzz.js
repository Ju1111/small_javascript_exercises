function fizzBuzz (a, b) {

  let output = ''

  for(i=1; i<=20;  i++) {
    if (i%a == 0 && i%b == 0)
      output += 'FizzBuzz'
    else if (i%a == 0)
      output += 'Fizz'
    else if (i%b == 0)
      output += 'Buzz'
    else
      output += i
  }

  return output
}

console.log(fizzBuzz(5, 3))
