function multiply(a) {
    function mul(b) {
        return a * b;



    }

    return mul;


}
var result = multiply(3)(3);
console.log(result);

