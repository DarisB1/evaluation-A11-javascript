function getReduction(price, age) {
	if (age < 5) {
        return 0
    }else if (age >= 5 && age <= 18){
        return price / 2;
    }else if (age > 18 && age <= 25) {
        let formule = price * 30 / 100;
        return price - formule
    } else {
        return price;
    }
}

console.log(getReduction(10, 5));
console.log(getReduction(150, 25));