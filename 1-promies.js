// async  

async function printnum(num) {
    console.log("1:message-2");
    await console.log("1:message-3");
    console.log("1:message-4");
    if (num) {
        return "ok";
    }
    else {
        return "not ok";
    }
}

console.log("1:message-1");
printnum(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
console.log("1:message-5");

// object 
let prom = new Promise(function (resolve, rejected) {
    if (5 < 4) {
        resolve();
    }
    else {
        rejected();
    }
});

let onFulfilment = (result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

prom.then(onFulfilment);
prom.catch(onRejection);