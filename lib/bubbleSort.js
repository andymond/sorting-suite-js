const sort = (array) => {
  let n = array.length
  for(var i = 0; i < n; i++) {
    array.forEach((num, index) => {
      if(num > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
      } else {
        return num
      }
    });
  }
  return array
}

module.exports = sort
