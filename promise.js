const pro1 = new Promise((resolve,reject)=>{
    resolve('success');
    reject('reject');
})
pro1.then((val)=>{
    console.log(`TRUE: ${val}`);
},
(err)=>{
    console.log(`ERROR :${err}`);
}
)