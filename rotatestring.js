const rotate = string => {
  array = string.split('')

  for (var i = 0; i < array.length; i++) {
    array.unshift(array.pop())
    console.log(array.join(''))
  }
}

rotate('sunshine')
