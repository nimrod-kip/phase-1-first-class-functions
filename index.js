function receivesAFunction(spy){
    spy();
}
  
  
function returnsANamedFunction() {
    function namedFn() {
      return "I'm a named function";
    }
    return namedFn;
  }
  

function returnsAnAnonymousFunction(){
   return function() {
        return "I'm  anonymous!";

    }

}