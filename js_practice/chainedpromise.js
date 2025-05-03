let myPromise = new Promise((reslove, reject) => {
    setTimeout(()=>{
        let bool;
        bool = Math.round(Math.random());
        console.log('bool',bool);
        if (bool) {
            reslove("Fullfilled");
        } else {
            reject("Got Failed");
        }
    },5000);
});

myPromise.then((result) => {
    console.log("result 1", result);
    return new Promise((reslove, reject) => {
        if (true) {
            reslove("Fullfilled");
        } else {
            reject("Got Failed");
        }
    });
}).then((result) => {
    console.log("result 2", result);
}).catch((error) => {
    console.log("error", error);
});
