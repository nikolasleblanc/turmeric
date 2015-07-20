function curry() {
  var fn = arguments[0];
  var expectedArgs = fn.length;
  var totalArgs = [];

  return function() {
    var argsProvided = Array.prototype.slice.call(arguments);
    argsProvided.forEach(function(item, index) {
      totalArgs.push(item);
    });
    if (totalArgs.length === expectedArgs) {
      var x = fn.apply(this, totalArgs);
      totalArgs = [];
      return x;
    }
    else {
      return arguments.callee;
    }
  };
}

module.exports = curry;