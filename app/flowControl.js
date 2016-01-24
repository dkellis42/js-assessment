exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if (typeof num !== 'number') {
      return false;
    }
    return (num % 3 === 0 || num % 5 === 0) ? [num % 3 === 0 ? 'fizz' : '', num % 5 === 0 ? 'buzz' : ''].join('') : num;
  }
};
