angular.module('starter.directive', [])
    .directive('logic', ['Helper', '$compile', function (Helper, $compile) {
        return {
            restrict: "E",
            controller: function ($scope, $stateParams, Tests) {
                var test = Tests.get($stateParams.testId);

                this.question = test.questions[$stateParams.questionId];
            },
            link: function (scope, element, attrs, controller) {
                var htm =
                    '<label class="item-input item-stacked-label">' +
                    '   <span class="input-label">Enter your response below below:</span>' +
                    '   <div><small>For multiple answers, use coma as a separator</small></div>' +
                    '   <label class="item item-input"><input type="text" ng-model="response" placeholder="Response"></label>' +
                    '</label>';

                var el = angular.element(htm);
                $compile(el.contents())(scope);
                element.replaceWith(el);
            }
        }
    }])

    .directive('leftsidemenucontent', ['Helper', '$compile', function (Helper, $compile) {
        return {
            restrict: "E",
            controller: function (localStorageService, Tests) {
                var questions = Tests.get(localStorageService.get('testId')).questions;

                var htm = '<div class="list">';
                questions.forEach(function (entry) {
                    var question = Helper.getStorageQuestion(localStorageService.get('catId'), localStorageService.get('groupId'), localStorageService.get('testId'), entry.id);
                    var qUrl = Helper.getQuestionUrl(localStorageService.get('catId'), localStorageService.get('groupId'), localStorageService.get('testId'), entry.id);
                    var icon = question === null ? 'ion-ios7-close-outline' : 'ion-ios7-checkmark-outline';
                    var color = question === null ? 'red' : '#323232';

                    htm += '<a class="item item-icon-left" id="question_' + entry.id + '" href="' + qUrl + '">';
                    htm += '<spam><i class="icon ' + icon + '" style="color:' + color + '"></i></spam> ' + entry.name + '</a>';
                    htm += '</a>';
                });
                htm += '</div>';

                this.html = htm;
            },
            link: function (scope, element, attrs, controller) {

                scope.refresh = function () {
                    console.log("Refresh called.");
                };

                var el = angular.element(controller.html);
                $compile(el.contents())(scope);
                element.replaceWith(el);
            }
        }
    }]);