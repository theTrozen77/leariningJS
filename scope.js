var locales = {
    europe: function () {

        var myFriend = "Monique";
        var france = function () {
            var paris = function () {
                console.log(myFriend);

            };
            paris();
        };
        france();



    }
};

locales.europe();