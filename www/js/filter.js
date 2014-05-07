angular.module('starter.filter', [])
    .filter('trim', function () {
        return function (text) {
            return text.trim();
        }
    });
