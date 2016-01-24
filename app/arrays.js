exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    function sum(a, b) {
      return a + b;
    }
    return arr.reduce(sum);
  },

  remove : function(arr, item) {
    return arr.filter(function (value){
      return value !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var i, 
      len;
      for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i = i - 1;
          len = len - 1;
        }
      }
    return arr;
  },

  append : function(arr, item) {
    return arr.concat(item);
  },

  truncate : function(arr) {
    return arr.filter(function (value, index, array){
        return index !== (array.length - 1);
    });
  },

  prepend : function(arr, item) {
    return [].concat(item).concat(arr);
  },

  curtail : function(arr) {
    return arr.filter(function (value, index, array){
        return index !== 0;
    });
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function (value) {
      return value === item;
    }).length;
  },

  duplicates : function(arr) {
    return arr.filter(function (value, index, array) {
      return (array.indexOf(value) !== index);
    });
  },

  square : function(arr) {
    return arr.map(function (value) {
      return value * value;
    });
  },

  findAllOccurrences : function(arr, target) {
    var returnedArray = [];
    arr.forEach(function (value, index) {
      if (value === target) {
        returnedArray.push(index);
      }
    });
    return returnedArray;
  }
};
