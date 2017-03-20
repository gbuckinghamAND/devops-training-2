(function (angular) {
    angular
        .module('app', [])
        .component('hello', {
            template: '<h1>Hello {{$ctrl.name}}</h1>',
            bindings: {
                name: '<',
            }
        });
})(angular);
