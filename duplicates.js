const a = ['a', 42, 'b', 42, 'a', 42, 11, 22, 11, 3, 42, 42, 42]
const b = [1, 2, 3, 2, 1]
const c = [1, 2, 3]

const dubbelen = array => {
	const uitvoor = []

  array.filter((value, index) => {
  	if (index !== array.indexOf(value) && !uitvoor.includes(value)) {
    	uitvoor.push(value)
    }
  })

  console.log(uitvoor)
  return uitvoor
}

dubbelen(a)
dubbelen(b)
dubbelen(c)
