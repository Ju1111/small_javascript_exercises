const rotate = string => {
  array = string.split('')
  
  for (var i = 0; i < array.length; i++) {
    var pop = array.pop([array.length-1])
    array.unshift(pop).toString()
    console.log(array.join(''))
  }
}

rotate('sunshine')
