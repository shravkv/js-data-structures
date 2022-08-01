function primeFactor(num) {
    const result = [];
    for (let i = 2; i < num; i++) {
        while (num % i == 0) {
            // console.log(i+"");
            result.push(i);
            num = num / i;
        }
    }
    return result;
}
console.log(primeFactor(100));
