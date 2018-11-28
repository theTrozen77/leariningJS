function multiply(a) {
    function m1(b) {
        function m2(c) {
            return a * b * c;

        }
        return m2;
    }
    return m1;
}
var result = multiply(3)(3)(3);
console.log('result is ', result);