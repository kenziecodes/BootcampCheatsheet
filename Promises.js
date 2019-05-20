var somePromise = new Promise(function(resolve, reject){
    var randNum = Math.floor(Math.random() * 2);
    if(randNum) {
        setTimeout(function(){
            resolve({asnycHandled:true})
        }, 3000)
    }
    else {
        reject('I got a falsy number')
    }
});


somePromise.then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})

somePromise.then(response =>{
    console.log(response);
}).catch(err => {
    console.log(err);
})