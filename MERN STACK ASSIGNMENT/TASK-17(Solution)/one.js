const divideNumbers=(nums1,nums2)=>{
    return new Promise((resolve,reject) =>{
        if(nums2 == 0){
            reject("Error : Can not divide by zero")
        }else{
            resolve(nums1/nums2)
        }
    });
};

divideNumbers(10,2)
.then(result=>console.log("Result : ",result))
.catch(error=>console.log(error));

divideNumbers(20,4)
.then(result=>console.log("Result : ",result))
.catch(error=>console.log(error));

divideNumbers(15,3)
.then(result=>console.log("Result : ",result))
.catch(error=>console.log(error));


divideNumbers(10,0)
.then(result=>console.log("Result : ",result))
.catch(error=>console.log(error));


divideNumbers(100,5)
.then(result=>console.log("Result : ",result))
.catch(error=>console.log(error));
