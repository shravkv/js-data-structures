let i = 0;
let min = 100;
let max = 999;
let storeArray = new Array;
while (i < 10) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    i++;
    storeArray.push(x);
}
console.log(storeArray);
function secondLargest(arr) {
    let first = arr[0], second = arr[1];
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] > first) {
           first = arr[i];
       }
       if (arr[i] < first && arr[i] > second) {
           second = arr[i];
       }
   }
   console.log("Second Largest Number is : " + second);

}
function secondSmallest(arr) {
    let secondSmallest = arr[1];
    let smallest = arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }

        if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    console.log("Second Smallest is :" + secondSmallest);
}
secondLargest(storeArray);
secondSmallest(storeArray)