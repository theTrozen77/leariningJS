function fp() {
    function fc1() {
        // console.log('Inside fc1');
        return 'from fc1';

    }
    // return fc1();
    // var a = fc1();
    // console.log(a);

    function fc2() {
        // console.log('Inside fc2');
        return 'from fc2';

    }
    // fc2();
    // var b = fc2();
    // // console.log(b);

    // function fc3() {
    //     // console.log('Inside fc3');
    //     return 'from fc3';
    // }
    // var c = fc3();
    // // console.log(c);
    return {
        1: fc1,
        2: fc2
    };
}
// console.log(fp[1]);

console.log(fp()[1]());
console.log(fp()[2]());

// var z = fp();

