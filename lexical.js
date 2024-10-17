function a (){
    let a = 10;
    c();
    function c(){
        console.log(a);
    }
}
a();
/*here we can understand that the function c is callinfg the variable from
 the call it go to the lexical parent of c and gets the value 
the scope chain  first when we call the variable the scope first
 check in the block then check in its lexical parent reference check etc */