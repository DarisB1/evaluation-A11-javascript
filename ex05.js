function isEnoughMoney(price, wallet) {
	if (price <= wallet) {
        return true
    }else {
        return false
    }
}

console.log(isEnoughMoney(10, 0));
console.log(isEnoughMoney(5, 25));