function askM(arg, cb) {
    console.log('I am inside askM', arg);

    cb(3);
}
askM(33, function (a) {
    console.log('Inside function');
    console.log('Value of passed arg inside function is ', a);


});
