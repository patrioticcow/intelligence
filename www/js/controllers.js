angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {

    })

    .controller('CategoriesCtrl', function ($scope, Categories) {
        var cat = Categories.all();

        $scope.categories = cat;

        addthis.layers({
            'theme': 'transparent',
            'share': {
                'position': 'left',
                'numPreferredServices': 5
            },
            'whatsnext': {}
        });
    })

    .controller('CategoryDetailCtrl', function ($scope, $stateParams, Categories, Tests) {
        var catGroup = Categories.getTest($stateParams.catId, $stateParams.groupId);
        var tests = Tests.all();

        $scope.group = catGroup;
        $scope.tests = tests;
        $scope.params = $stateParams;
    })

    .controller('QuestionCtrl', function ($scope, $stateParams, $window, $ionicSideMenuDelegate, localStorageService, Categories, Tests, Helper) {
        var qCount = Tests.getCount($stateParams.testId);
        var test = Tests.get($stateParams.testId);
        var question = test.questions[$stateParams.questionId];

        Helper.setParamsToStorage($stateParams);

        $scope.test = test;
        $scope.question = question;
        $scope.points = Helper.parsePoints(question.points);
        $scope.params = $stateParams;
        $scope.response = Helper.getStorageQuestion();
        $scope.buttonName = (parseInt($stateParams.questionId) + 1) === qCount ? 'Finish' : 'Continue';

        $scope.nextQuestion = function (response) {

            if ((parseInt($stateParams.questionId) + 1) === qCount) {
                Helper.finishUrl();
            } else {
                Helper.questionUrl(parseInt($stateParams.questionId) + 1);
            }

            if (!Helper.isEmpty(response)) {
                Helper.sideQuestion($stateParams.questionId);
                Helper.setStorageQuestion(response);
            }

            if ($ionicSideMenuDelegate.isOpenLeft()) {
                $ionicSideMenuDelegate.toggleLeft();
            }
        };

        $scope.prevQuestion = function () {
            Helper.questionUrl(parseInt($stateParams.questionId) - 1);
        };

        $scope.toggleSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })

    .controller('FinishCtrl', function ($scope, $stateParams, $window, $ionicSideMenuDelegate, localStorageService, Categories, Tests, Helper) {
        var answers = Helper.getAnswers();
        $scope.answers = answers;

        var score = Helper.getIqScore(answers);
        $scope.score = score;

        $scope.restartTest = function () {
            Helper.clearTestQuestions(0, 0, 0);
            $window.location.href = Helper.getQuestionUrl(0, 0, 0, 0);
        };

        $scope.toggleSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })

    .controller('sideMenuCtrl', function ($scope, $stateParams) {

    })

    .controller('AccountCtrl', function ($scope) {

    });