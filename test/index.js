var assert = require("assert");
var turmeric = require("../index.js");

describe('Turmeric', function() {
  it('should return 12 when the appropriate arguments are provided', function () {
    function volume(w, h, l) {
      return w * h * l;
    }
    var t = turmeric(volume);
    assert.equal(t(1)(2)(6), 12);
  });
});
