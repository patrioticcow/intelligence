angular.module('starter.helper', [])
    .factory('Helper', function ($window, $stateParams, localStorageService, Tests, Scores) {
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
            clearTestQuestions: function (catId, groupId, testId) {
                for (var i = 0; i <= 40; i++) {
                    localStorageService.remove('category-' + catId + '.group-' + groupId + '.test-' + testId + '.answer-' + i);
                }
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
                var currentTest = Tests.get($stateParams.testId).questions;

                var obj = {};
                var answers = [];
                var correct_answeres_total = [];
                var incorrect_answeres_total = [];
                var unanswered = 0;
                for (var i = 0; i < qCount; i++) {
                    var name = pathName + '.answer-' + i;
                    answers.push(localStorageService.get(name));
                    if (localStorageService.get(name) === null) {
                        unanswered++;
                    }
                    currentTest[i].answer = localStorageService.get(name);

                    // if there is an answer in the localstorage
                    if (localStorageService.get(name)) {
                        var answer = localStorageService.get(name).toUpperCase().trim();
                        // if there is logic try to make it match
                        if (!this.isObjEmpty(currentTest[i].logic)) {
                            currentTest[i].logic.forEach(function (obj) {
                                if (obj.multiple !== undefined) {
                                    var split = answer.split(",");
                                    // go through each correct_answer and see if it matches the actual answer
                                    var x = true;
                                    currentTest[i].correct_answer.forEach(function (k, v) {
                                        if (split[v] === undefined || k !== split[v].toUpperCase().trim()) {
                                            x = false;
                                        }
                                    });

                                    if (!x) {
                                        currentTest[i].is_correct_answered = false;
                                        incorrect_answeres_total++;
                                    } else {
                                        currentTest[i].is_correct_answered = true;
                                        correct_answeres_total++;
                                    }
                                }
                            });

                            console.log(currentTest[i].id);
                            console.log(currentTest[i].correct_answer);
                            console.log(answer);
                        } else {
                            if (answer === currentTest[i].correct_answer) {
                                currentTest[i].is_correct_answered = true;
                                correct_answeres_total++;
                            } else {
                                currentTest[i].is_correct_answered = false;
                                incorrect_answeres_total++;
                            }
                        }
                    }
                }

                obj.correct_answeres_total = correct_answeres_total;
                obj.incorrect_answeres_total = incorrect_answeres_total;
                obj.answers = answers;
                obj.total = answers.length;
                obj.answered = answers.length - unanswered;
                obj.unanswered = unanswered;
                obj.current_test = Tests.get($stateParams.testId);

                return obj;
            },
            getIqScore: function (answers) {
                var scoreTitles = Scores.get($stateParams.catId).titles;
                var iq = 0;
                scoreTitles.forEach(function (entry) {
                    // get test type
                    if (entry.score == answers.current_test.score) {
                        // go through the answers points
                        entry.results.forEach(function (entry) {
                            // check if the test results matches any score
                            if (answers.answered == entry.score) {
                                iq = entry.iq;
                            }
                        });
                    }
                });

                return iq;
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
