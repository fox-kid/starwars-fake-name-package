const data = require("./sw-names/names.json");

let namesArr = data.data;

const allowedQty = [2, 3, 4, 5];

nameGenerator = (qt) => {
    let fakeNameArr = [];

    if(!allowedQty.includes(qt)) {
        console.error("Allowed quantity is from 2 to 5. Please re-enter the number");

        return;
    }

    for(i = 0; i < qt; i++) {
        fakeNameArr.push(namesArr[Math.floor(Math.random() * namesArr.length)])
    }

    return fakeNameArr.join(" ")
}

module.exports = {
    nameGenerator: nameGenerator
}
