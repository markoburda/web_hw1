// ### 3. **Maximum Possible Total**
// ​
// Given an array of 10 numbers, return the **maximum possible total** made by summing just **5 of the 10 numbers**.

function maxTotal(arr) {
    var res = 0;
    arr.sort(function(a, b){return b - a});
    for (var i of arr.slice(0,5)) {
      res += i;
    }
    return res;
}

    // maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) // 43
    // maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])   // 100
    // maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])    // 40