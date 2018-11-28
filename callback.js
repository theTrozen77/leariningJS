console.log('I need a new Dell 5547 laptop');
console.log('going to market');
console.log('I go to the shop and ask for a dell laptop but the shopkeeper has only acer laptop')
function searchDell(model, cb) {
    console.log('searching for desiredd model', model);

    setTimeout(function () {
        console.log('few days taken  for searching');
        cb();

    }, 8000);

}


searchDell(5547, function () {
    console.log('Delay caused because of searching');
    console.log('finally found the required model');
    console.log('Shopkeeper called back');


})
console.log('search other shops for laptop');
console.log('Not found in othrt shops');