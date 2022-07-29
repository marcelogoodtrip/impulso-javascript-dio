//  PROMISE

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvido!'));
    }, 2000);
});

await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' OK!')
        .catch((err) => console.log(err.message));

//  APÓS 2 SEGUNDOS, RETORNARÁ O VALOR;
//  "RESOLVIDA PASSNADO PELO THEN E OK!"



//      AYNC    /   AWAIT

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvido!'));
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' OK!')
        .catch((err) => console.log(err.message));
    
    return resolved;
}


//      USING   TRY     /     CATCH

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvido!'));
        }, 3000);
    });

    try {
        result = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' OK!')
    } catch(err) {
        result = err.message
    }
    
    return result;
}