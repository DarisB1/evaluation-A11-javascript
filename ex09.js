function encodePassword(password, encodeFunction) {
	encodeFunction(password);
}

function encodeRot8(password) {
    let T = password.split("")
    for (let i = 0; i < 8; i++) {
       letterToNumber(T[i]) + 1;
        
    }
}

function encodeRot16(password) {
    let T = password.split("")
    for (let i = 0; i < 16; i++) {
       letterToNumber(T[i]) + 1;
        
    }
}

console.log(encodePassword("abc", encodeRot8));
console.log(encodePassword("abc", encodeRot16));
console.log(encodePassword("xyz", encodeRot8));
console.log(encodePassword("xyz", encodeRot16));