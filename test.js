var app = angular.module("myApp", []);
app.directive("aa", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
