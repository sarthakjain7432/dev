function placeOrder(drink){
    return new Promise (function(resolve,reject){
        if(drink === "coffee"){
            resolve("order placed")
        }else{
            reject("Sorry, we only serve coffee")
        }
    })
}
function processOrder(order){
    return new Promise(function(resolve){
        console.log("order is being processed");
        resolve(`coffee served for the ${order}`);
    })
}
//scenerio with promises
 placeOrder("coffee").then(function(orderFromCustomer){
   console.log("request recieved");
   let orderIsProcessed = processOrder(orderFromCustomer);
   return orderIsProcessed;                       //request recieved
 }).then(function(orderIsProcessed){              //order is being processed
     console.log(orderIsProcessed);               //coffee served for the order placed
 }).catch(function(err){
     console.log(err);
 })                                                                                            

//Async-await
// async function serveOrder(){
//     try {
//         const orderRecieved = await placeOrder("coffee");
//         console.log(orderRecieved);
//         const processedOrder = await processOrder(orderRecieved);
//         console.log(processedOrder);
//         } catch (error) {
//             console.log(error);      
//         }
    
// }
// serveOrder();