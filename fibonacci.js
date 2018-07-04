const fibonacci = () => {

  const output = [1, 1]

  for (x=0; x<20; x++) {
    output.push(output[output.length-1] + output[output.length-2])
  }
  console.log(output)
}

fibonacci()
