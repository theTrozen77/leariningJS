
var name = "Prazzol";
welcome();
function welcome() {
    name = "Prajwal";
    console.log("Name inside welcome", name);


    function abc() {
        var name = "Prapp";
        var test = 34;
        console.log("Name inside abc", name);
        var foo = true;
        if (foo) {
            let test = 12; //if var the outside block scope maa 12 jancha but if let 34 jancha
            console.log(test);

        }
        else {
            var test = 23;
            console.log(test);

        }
        console.log("outside block scope", test);




    }

    //     // function another() {
    //         console.log("Name inside another", name);
    //     }
    abc();
    //     another();
    // }



    // function address() {
    //     // var addr = "chitwan";
    //     // console.log(addr);
    //     var name = "ada";
    //     console.log("Name inside addrss", name);


}




// address();


