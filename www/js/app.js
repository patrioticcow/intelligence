angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',
    'starter.helper',
    'starter.filter',
    'starter.directive',
    'LocalStorageModule'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('tab.categories', {
                url: '/categories',
                views: {
                    'tab-question': {
                        templateUrl: 'templates/tab-categories.html',
                        controller: 'CategoriesCtrl'
                    }
                }
            })
            .state('tab.category-detail', {
                url: '/category/:catId/group/:groupId',
                views: {
                    'tab-question': {
                        templateUrl: 'templates/category-detail.html',
                        controller: 'CategoryDetailCtrl'
                    }
                }
            })
            .state('tab.finish', {
                url: '/finish/category/:catId/group/:groupId/test/:testId',
                views: {
                    'tab-question': {
                        templateUrl: 'templates/finish.html',
                        controller: 'FinishCtrl'
                    }
                }
            })
            .state('tab.question', {
                url: '/category/:catId/group/:groupId/test/:testId/question/:questionId',
                views: {
                    'tab-question': {
                        templateUrl: 'templates/question.html',
                        controller: 'QuestionCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');

    });

