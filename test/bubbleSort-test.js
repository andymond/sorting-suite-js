const assert = require('chai').assert
const sort = require('../lib/bubbleSort')

describe("bubbleSort algorithm", function() {
  it("sorts array contents", function() {
    assert.deepEqual([1, 2, 3, 4, 5], sort([4, 5, 2, 3, 1]))
    assert.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], sort([0, 1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
    assert.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], sort([13, 8, 2, 6, 3, 5, 4, 7, 1, 9, 10, 12, 11, 0]))
  })
})
