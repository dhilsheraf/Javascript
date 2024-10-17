// console.log("haai bro");
// setTimeout(function (){

//     console.log("hello kid");
// },5000 )


// console.log("Bye Kid");
 
const cart = ["shirt","Pant","Boxer"];

api.createOrder(cart , function (){   //callbackhell
    api.proceedToPayment(function (){
        api.showOrderSummary(
            function (){
    api.updateWallet()
}
        );
    });
})

api.createOrder(cart , function (){  //inversion of controli

    api.proceedToPayment()
    
})




