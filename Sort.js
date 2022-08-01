let array = [2, 4, 7, 3, 10, 6, 9];
console.log("Before Sorting the Array is:"+array);
let sortedArray = array.sort(function (a, b) {
    return a - b
});
console.log("After Sorting the Array is :"+sortedArray);
console.log("Second Largest element is :"+array[array.length-2]);
console.log("Second smallest element is :"+array[1]);
