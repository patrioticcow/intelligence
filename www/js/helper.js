angular.module('starter.helper', [])
    .factory('Helper', function ($window, $stateParams, localStorageService, Tests) {
        return {
            isEmpty: function (value) {
                if (value === '' || value === undefined || value === null) {
                    //alert('Please answer question.');
                    return true;
                }
                return false;
            },
            finishUrl: function () {
                $window.location.href = '#/tab/finish/category/' + $stateParams.catId + '/group/' + $stateParams.groupId + '/test/' + $stateParams.testId;
            },
            questionUrl: function (id) {
                if (id >= 0) {
                    $window.location.href = '#/tab/category/' + $stateParams.catId + '/group/' + $stateParams.groupId + '/test/' + $stateParams.testId + '/question/' + id;
                }
            },
            sideQuestion: function (id) {
                document.getElementById('question_' + id).getElementsByTagName("spam")[0].innerHTML = '<i class="icon ion-ios7-checkmark-outline" style="color:#323232"></i>';
            },
            getQuestionUrl: function (catId, groupId, testId, questionId) {
                var catId = (catId || catId === 0) ? catId : $stateParams.catId;
                var groupId = (groupId || groupId === 0) ? groupId : $stateParams.groupId;
                var testId = (testId || testId === 0) ? testId : $stateParams.testId;
                var questionId = (questionId || questionId === 0) ? questionId : $stateParams.questionId;

                return '#/tab/category/' + catId + '/group/' + groupId + '/test/' + testId + '/question/' + questionId;
            },
            parsePoints: function (points) {
                if (typeof points !== 'number') {
                    var html = '';
                    points.forEach(function (entry) {
                        html += entry.count + ' correct answers ' + entry.points + ' each, ';
                    });
                    return html;
                } else {
                    return points;
                }
            },
            getAnswers: function () {
                var qCount = Tests.getCount($stateParams.testId);
                var pathName = 'category-' + $stateParams.catId + '.group-' + $stateParams.groupId + '.test-' + $stateParams.testId;

                var obj = {};
                var answers = [];
                var unanswered = 0;
                for (var i = 0; i < qCount; i++) {
                    var name = pathName + '.answer-' + i;
                    answers.push(localStorageService.get(name));
                    if (localStorageService.get(name) === null) {
                        unanswered++;
                    }
                }

                obj.answers = answers;
                obj.total = answers.length;
                obj.answersed = answers.length - unanswered;
                obj.unanswered = unanswered;

                return obj;
            },
            parseAnswers: function (maintest, sp) {
                var points = 0;
                maintest.questions.forEach(function (test) {
                    // check to see if the answer needs to be simple or complex
                    var answer = localStorageService.get('category-' + sp.catId + '.group-' + sp.groupId + '.test-' + sp.testId + '.answer-' + test.id);
                    if (test.logic.length === 0) {
                        if(test.correct_answer === answer){
                            points ++;
                        }
                    } else {

                        console.log(test.correct_answer);
                    }
                });

                console.log('points: ' + points);

            },
            setStorageQuestion: function (response) {
                var pathName = 'category-' + $stateParams.catId + '.group-' + $stateParams.groupId + '.test-' + $stateParams.testId;
                localStorageService.add(pathName + '.answer-' + $stateParams.questionId, response);
            },
            getStorageQuestion: function (catId, groupId, testId, questionId) {
                var catId = (catId || catId === 0) ? catId : $stateParams.catId;
                var groupId = (groupId || groupId === 0) ? groupId : $stateParams.groupId;
                var testId = (testId || testId === 0) ? testId : $stateParams.testId;
                var questionId = (questionId || questionId === 0) ? questionId : $stateParams.questionId;

                return localStorageService.get('category-' + catId + '.group-' + groupId + '.test-' + testId + '.answer-' + questionId);
            },
            setParamsToStorage: function (params) {
                for (var index in params) {
                    localStorageService.add(index, params[index]);
                }
            },
            isObjEmpty: function (obj) {
                if (obj == null) return true;
                if (obj.length > 0) return false;
                if (obj.length === 0) return true;
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) return false;
                }

                return true;
            }
        }
    })
;
