angular.module('starter.services', [])

    .factory('Categories', function () {
        var categories = [
            { id: 0, name: 'IQ Tests', groups: [
                { id: 0, name: 'Elementary Level', count: 10 },
                { id: 1, name: 'Challenging Level', count: 10 },
                { id: 2, name: 'Masterful Level', count: 10 }
            ]},
            { id: 0, name: 'Performance Tests', groups: [
                { id: 0, name: '1Elementary Level', count: 10 },
                { id: 1, name: '2Challenging Level', count: 10 },
                { id: 2, name: '3Masterful Level', count: 10 }
            ]}
        ];

        return {
            all: function () {
                return categories;
            },
            get: function (catId) {
                return categories[catId];
            },
            getTest: function (catId, groupId) {
                return categories[catId].groups[groupId];
            }
        }
    })
    .factory('Tests', function () {
        var tests = [
            { id: 0, name: 'Test 1', questions: [
                { id: 0, name: 'What letter will complete this word?', correct_answer: 'H', points: 1,
                    logic: [],
                    response: 'The word is ADHERE' },
                { id: 1, name: 'Which one of there figures is wrong?', correct_answer: 'A', points: 1,
                    logic: [],
                    response: [
                        'When the diagonal line from the base-line of the square inclines to the right, as in C, E and G, the right half of the square is black.',
                        'When it inclined to the left, as in B, D and F, bottom half of the square is black.',
                        'In A, the right half of the square should be black'
                    ]},
                { id: 2, name: 'Add the two highest numbers and take away the sum of the three lowest numbers', correct_answer: '17', points: 1,
                    logic: [],
                    response: []},
                { id: 3, name: 'If 6 3 5 4 2 equals 5 2 6 3 4, what is:', correct_answer: 'DFBCE', points: 1,
                    logic: [],
                    response: [
                        'The letter must be transposed in the same order as the numbers.'
                    ]},
                { id: 4, name: 'Join these syllables in pairs to make ten words:', correct_answer: ['RECORD', 'CATER', 'TOMBOY', 'TABLE', 'HERBAL', 'EYESORE', 'OUTLET', 'SALOON', 'BREAD', 'FUROR'],
                    points: [
                        {count: 10, points: 1},
                        {count: 5, points: 0.5}
                    ],
                    logic: [
                        {pair: 10}
                    ],
                    response: []},
                { id: 5, name: 'Arrange these into four pairs:', correct_answer: ['AG', 'BF', 'CH', 'DE'], points: 1,
                    logic: [
                        {pairs: 4}
                    ],
                    response: []},
                { id: 6, name: 'What are the last two terms in these series?', correct_answer: ['P', 23], points: 1,
                    logic: [
                        {next: 2}
                    ],
                    response: [
                        'Two separate series. Letters descend alphabetically, first to teh next letter, then skipping one, then two, and so on. The numbers size in the same way'
                    ]},
                { id: 7, name: 'Which is the odd one out?', correct_answer: 'B', points: 1,
                    logic: [],
                    response: [
                        'All the other currencies contain the letters RA in that order. in MARKS these letters are reversed'
                    ]},
                { id: 8, name: 'Which is the odd one out?', correct_answer: 'E', points: 1,
                    logic: [],
                    response: [
                        'An anagram of CHESS. All the others anagrams types of entertainment',
                        '(A) PLAY',
                        '(B) OPERA',
                        '(C) REVUE',
                        '(D) CONCERT'
                    ]},
                { id: 9, name: 'Which of there is wrong?', correct_answer: 'H', points: 1,
                    logic: [],
                    response: [
                        'The points has two barbs instead of one, and one set of tail feathers instead of two.'
                    ]},
                { id: 10, name: 'Which date does not conform with the others?', correct_answer: 'C', points: 1,
                    logic: [],
                    response: [
                        'The digits add up to 19. In all the others they add up to 18.'
                    ]},
                { id: 11, name: 'Which is the odd one out?', correct_answer: 'B', points: 1,
                    logic: [],
                    response: [
                        'It starts and ends with the same two letters. All the others start and end with the same two letters reversed.'
                    ]},
                { id: 12, name: 'Arrange these words in alphabetical order:', correct_answer: ['E', 'C', 'G', 'F', 'B', 'A', 'D'], points: 1,
                    logic: [
                        {order: 'all'}
                    ],
                    response: []},
                { id: 13, name: 'Who has changed his expression?', correct_answer: 'J', points: 1,
                    logic: [],
                    response: [
                        'The mouth should be he same as in B and H.'
                    ]},
                { id: 14, name: 'Which of these shields are identical', correct_answer: ['B', 'M'], points: 1,
                    logic: [
                        {count: 2}
                    ],
                    response: []}
            ]},
            { id: 1, name: 'Test 2', questions: [

            ]},
            { id: 2, name: 'Test 3', questions: [

            ]},
            { id: 3, name: 'Test 4', questions: [

            ]}
        ];

        return {
            all: function () {
                return tests;
            },
            get: function (testId) {
                return tests[testId];
            },
            getQuestion: function (testId, questionId) {
                return tests[testId].questions[questionId];
            },
            getCount: function (testId) {
                return tests[testId].questions.length;
            }
        }
    });
