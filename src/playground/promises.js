const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong!')
  }, 1000)
});

promise.then( res => {
  console.log(res)
}).catch( error => {
  console.log(error)
})