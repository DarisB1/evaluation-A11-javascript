function isSumEven(a, b) {
	if ((a + b) % 2 === 0) {
        return true
    }else {
        return false
    }
}

console.log(isSumEven(1, 3));
console.log(isSumEven(1, 0));