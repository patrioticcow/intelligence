angular.module('starter.services', [])

    .factory('Categories', function () {
        var categories = [
            { id: 0, name: 'IQ Tests', groups: [
                { id: 0, name: 'Elementary Level', count: 10 },
                { id: 1, name: 'Challenging Level', count: 10 },
                { id: 2, name: 'Masterful Level', count: 10 }
            ]},
            { id: 1, name: 'Performance Tests', groups: [
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
    .factory('Scores', function () {
        var scores = [
            { id: 0, name: 'IQ Tests',
                titles: [
                    {score: 'elementary', name: 'Your Elementary Test Score', results: [
                        {'score': 60, 'iq': 140},
                        {'score': 59.5, 'iq': 138},
                        {'score': 59, 'iq': 136},
                        {'score': 58.5, 'iq': 134},
                        {'score': 57.5, 'iq': 132},
                        {'score': 56.5, 'iq': 130},
                        {'score': 56, 'iq': 128},
                        {'score': 55, 'iq': 126},
                        {'score': 54.5, 'iq': 124},
                        {'score': 54, 'iq': 122},
                        {'score': 53, 'iq': 120},
                        {'score': 52, 'iq': 118},
                        {'score': 50.5, 'iq': 116},
                        {'score': 49, 'iq': 114},
                        {'score': 47, 'iq': 112},
                        {'score': 45.5, 'iq': 110},
                        {'score': 44, 'iq': 108},
                        {'score': 42.5, 'iq': 106},
                        {'score': 41, 'iq': 104},
                        {'score': 39.5, 'iq': 102},
                        {'score': 37.5, 'iq': 100},
                        {'score': 36, 'iq': 98},
                        {'score': 34.5, 'iq': 96},
                        {'score': 33, 'iq': 94},
                        {'score': 31.5, 'iq': 92},
                        {'score': 30, 'iq': 90},
                        {'score': 28, 'iq': 88},
                        {'score': 27, 'iq': 86},
                        {'score': 25.5, 'iq': 84},
                        {'score': 24, 'iq': 82},
                        {'score': 22.5, 'iq': 80},
                        {'score': 21, 'iq': 78},
                        {'score': 19.5, 'iq': 76},
                        {'score': 18, 'iq': 74},
                        {'score': 16.5, 'iq': 72},
                        {'score': 15, 'iq': 70}
                    ]},
                    {score: 'challenging', name: 'Your Challenging Test Score', results: [
                        {'score': 60, 'iq': 140},
                        {'score': 59, 'iq': 138},
                        {'score': 57, 'iq': 136},
                        {'score': 56, 'iq': 134},
                        {'score': 55, 'iq': 132},
                        {'score': 54, 'iq': 130},
                        {'score': 53, 'iq': 128},
                        {'score': 52, 'iq': 126},
                        {'score': 51, 'iq': 124},
                        {'score': 49.5, 'iq': 122},
                        {'score': 48, 'iq': 120},
                        {'score': 46, 'iq': 118},
                        {'score': 44, 'iq': 116},
                        {'score': 42, 'iq': 114},
                        {'score': 40, 'iq': 112},
                        {'score': 38, 'iq': 110},
                        {'score': 36, 'iq': 108},
                        {'score': 34, 'iq': 106},
                        {'score': 32, 'iq': 104},
                        {'score': 30, 'iq': 102},
                        {'score': 28.5, 'iq': 100},
                        {'score': 27.5, 'iq': 98},
                        {'score': 26.5, 'iq': 96},
                        {'score': 25.5, 'iq': 94},
                        {'score': 24.5, 'iq': 92},
                        {'score': 23.5, 'iq': 90},
                        {'score': 22.5, 'iq': 88},
                        {'score': 21.5, 'iq': 86},
                        {'score': 20.5, 'iq': 84},
                        {'score': 19.5, 'iq': 82},
                        {'score': 18.5, 'iq': 80},
                        {'score': 17.5, 'iq': 78},
                        {'score': 16.5, 'iq': 76},
                        {'score': 15.5, 'iq': 74},
                        {'score': 14.5, 'iq': 72},
                        {'score': 13, 'iq': 70}
                    ]},
                    {score: 'masterful', name: 'Your Masterful Test Score', results: [
                        {'score': 45, 'iq': 140},
                        {'score': 44.5, 'iq': 138},
                        {'score': 44, 'iq': 136},
                        {'score': 43.5, 'iq': 134},
                        {'score': 43, 'iq': 132},
                        {'score': 42, 'iq': 130},
                        {'score': 41, 'iq': 128},
                        {'score': 40.5, 'iq': 126},
                        {'score': 40, 'iq': 124},
                        {'score': 39, 'iq': 122},
                        {'score': 38, 'iq': 120},
                        {'score': 36.5, 'iq': 118},
                        {'score': 35, 'iq': 116},
                        {'score': 33.5, 'iq': 114},
                        {'score': 31.5, 'iq': 112},
                        {'score': 30, 'iq': 110},
                        {'score': 28.5, 'iq': 108},
                        {'score': 27, 'iq': 106},
                        {'score': 25.5, 'iq': 104},
                        {'score': 24, 'iq': 102},
                        {'score': 23, 'iq': 100},
                        {'score': 22, 'iq': 98},
                        {'score': 21, 'iq': 96},
                        {'score': 20, 'iq': 94},
                        {'score': 19, 'iq': 92},
                        {'score': 18, 'iq': 90},
                        {'score': 17, 'iq': 88},
                        {'score': 16, 'iq': 86},
                        {'score': 15, 'iq': 84},
                        {'score': 14, 'iq': 82},
                        {'score': 13, 'iq': 80},
                        {'score': 12, 'iq': 78},
                        {'score': 11, 'iq': 76},
                        {'score': 10, 'iq': 74},
                        {'score': 9, 'iq': 72},
                        {'score': 8, 'iq': 70}
                    ]},
                    {score: 'composite', name: 'Your Composite Test Score', results: [
                        {'score': 165, 'iq': 140},
                        {'score': 163, 'iq': 138},
                        {'score': 160, 'iq': 136},
                        {'score': 158, 'iq': 134},
                        {'score': 155, 'iq': 132},
                        {'score': 152, 'iq': 130},
                        {'score': 150, 'iq': 128},
                        {'score': 147, 'iq': 126},
                        {'score': 145, 'iq': 124},
                        {'score': 142, 'iq': 122},
                        {'score': 139, 'iq': 120},
                        {'score': 134, 'iq': 118},
                        {'score': 129, 'iq': 116},
                        {'score': 124, 'iq': 114},
                        {'score': 118, 'iq': 112},
                        {'score': 113, 'iq': 110},
                        {'score': 108, 'iq': 108},
                        {'score': 103, 'iq': 106},
                        {'score': 98, 'iq': 104},
                        {'score': 93, 'iq': 102},
                        {'score': 89, 'iq': 100},
                        {'score': 85, 'iq': 98},
                        {'score': 82, 'iq': 96},
                        {'score': 78, 'iq': 94},
                        {'score': 75, 'iq': 92},
                        {'score': 71, 'iq': 90},
                        {'score': 68, 'iq': 88},
                        {'score': 64, 'iq': 86},
                        {'score': 61, 'iq': 84},
                        {'score': 57.5, 'iq': 82},
                        {'score': 54, 'iq': 80},
                        {'score': 50, 'iq': 78},
                        {'score': 47, 'iq': 76},
                        {'score': 43, 'iq': 74},
                        {'score': 40, 'iq': 72},
                        {'score': 36, 'iq': 70}
                    ]}
                ]
            },
            { id: 1, name: 'Performance Tests', groups: [
                { id: 0, name: '1Elementary Level', count: 10 },
                { id: 1, name: '2Challenging Level', count: 10 },
                { id: 2, name: '3Masterful Level', count: 10 }
            ]}
        ];

        return {
            all: function () {
                return scores;
            },
            get: function (catId) {
                return scores[catId];
            }
        }
    })
    .factory('Tests', function () {
        var tests = [
            { id: 0, score: 'elementary', name: 'Test 1', questions: [
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
                        {multiple: 'all'}
                    ],
                    response: []},
                { id: 5, name: 'Arrange these into four pairs:', correct_answer: ['AG', 'BF', 'CH', 'DE'], points: 1,
                    logic: [
                        {multiple: 'all'}
                    ],
                    response: []},
                { id: 6, name: 'What are the last two terms in these series?', correct_answer: ['P', '23'], points: 1,
                    logic: [
                        {multiple: 'all'}
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
                        {multiple: 'all'}
                    ],
                    response: []},
                { id: 15, name: 'What goes into the empty brackets?',
                    correct_answer: ['1416'], points: 1,
                    logic: [],
                    response: [
                        'In the first example, divide the left-hand number by 4 and the right-hand number by 5',
                        'In the second example, divide the left-hand number by 6 and the right-hand number by 7',
                        'Therefore, in the third line, divide the left-hand number by B(14) and the right-hand number by 9(16)'
                    ]},
                { id: 16, name: 'Fill in the brackets. The word in each set of brackets must logically fallow the previous word and precede the fallowing word, e.g. library (BOOK) mark.',
                    correct_answer: ['DOG', 'BOAT', 'BIRD', 'WATER', 'OUT', 'WALK'], points: 1,
                    logic: [
                        {multiple: 'all'}
                    ],
                    response: []},
                { id: 17, name: 'Using your eye only, witch is the missing brick?',
                    correct_answer: ['C'], points: 1,
                    logic: [],
                    response: []},
                { id: 18, name: 'Witch one is the odd one out?',
                    correct_answer: ['F'], points: 1,
                    logic: [],
                    response: [
                        'The others pair as fallowsL A and L; B and K; C and J; D and H; E and I; G and M. The comb does not pair with anything'
                    ]},
                { id: 19, name: 'Arrange these strange-looking insects into four pairs:',
                    correct_answer: ['AF', 'BG', 'CH', 'DE'], points: 1,
                    logic: [],
                    response: []},
                { id: 20, name: 'What is X?',
                    correct_answer: ['J'], points: 1,
                    logic: [],
                    response: [
                        'THe initials are the months: January, March, May, etc. THe answer of J is January'
                    ]},
                { id: 21, name: 'Witch one is wrong?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'The triangle should be on the right-hand side of the base-line'
                    ]},
                { id: 22, name: 'Arrange the labels into four pairs:',
                    correct_answer: ['AF', 'BH', 'CG', 'DE'], points: 1,
                    logic: [],
                    response: [
                        'A and F each equal 11',
                        'B and H each equal 13',
                        'C and G each equal 12',
                        'D and E each equal 10'
                    ]},
                { id: 23, name: 'What is X?',
                    correct_answer: ['B'], points: 1,
                    logic: [],
                    response: [
                        'In each section, the letters in the outer ring combine with those in the inner ring to form a word in conjunction with LAND witch is common to all the words',
                        'IS     LAND    ER',
                        'G      LAND    ULAR',
                        'OUT    LAND    ISH',
                        'UP     LAND    S',
                        'S      LAND    ER',
                        'GAR    LAND    S',
                        'B      LAND    ISHMENT (X is B)'
                    ]},
                { id: 24, name: 'Complete these words, for which definitions are given:',
                    correct_answer: ['PERSONNEL', 'OPERATION', 'SUPERCEDE', 'DESPERATE', 'PROSPERED', 'STRIPPERS', 'NEWSPAPER'],
                    points: [
                        {count: 10, points: 1},
                        {count: 5, points: 0.5}
                    ],
                    logic: [],
                    response: []},
                { id: 25, name: 'Arrange these patterns into four pairs.',
                    correct_answer: ['AE', 'BD', 'CG', 'FH'], points: 1,
                    logic: [],
                    response: []},
                { id: 26, name: 'Which of these does not belong?',
                    correct_answer: ['18'], points: 1,
                    logic: [],
                    response: [
                        'All the others are divisible by 4'
                    ]},
                { id: 27, name: 'Change RAIN into SNOW in three moves, changing TWO letters at a time.',
                    answer_helper: {pre: 'RAIN', post: 'SNOW'},
                    correct_answer: ['SAIL', 'SNIP'], points: 1,
                    logic: [],
                    response: []},
                { id: 28, name: 'Which is the odd one out?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'CORINTHIANS is in the New Testament; all the others are in the Old Testament'
                    ]},
                { id: 29, name: 'Assuming that the top two stars are correct, which of those below are wrong?',
                    correct_answer: ['F', 'H'], points: 1,
                    logic: [],
                    response: []},
                { id: 30, name: 'What are X and Y?',
                    correct_answer: ['6', '1'], points: 1,
                    logic: [],
                    response: [
                        'Starting at number 1 and moving to alternate segments clockwise: 1 2 3 4 5 6',
                        'Starting at number 6 and moving the same way: 6 5 4 3 2 1'
                    ]},
                { id: 31, name: 'Which is the odd one out?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'Is BURSAAL there are two identical adjacent vowels. In all the other words there are two identical adjacent consonants'
                    ]},
                { id: 32, name: 'Complete words to fit the definitions. The number of missiong letters is indicated by dashes',
                    correct_answer: ['TRANSPIRE', 'ATTIRE', 'CONSPIRE', 'EXPIRE', 'ENTIRE', 'EMPIRE', 'QUAGMIRE', 'SATIRE', 'UMPIRE'],
                    points: [
                        {count: 9, points: 1},
                        {count: 6, points: 0.5}
                    ],
                    logic: [],
                    response: []},
                { id: 33, name: 'Read the question form the image',
                    correct_answer: ['B'], points: 1,
                    logic: [],
                    response: []},
                { id: 34, name: 'Which column does not conform?',
                    correct_answer: ['E'], points: 1,
                    logic: [],
                    response: [
                        'Adding up each column:',
                        'Column A ..... 75',
                        'Column B ..... 80',
                        'Column C ..... 85',
                        'Column D ..... 90',
                        'Column E ..... 96',
                        'Column F ..... 100'
                    ]},
                { id: 35, name: 'In the figure below were held in the front of a mirror and the mirror turned upside-down, witch of the other figures would be reflected?',
                    correct_answer: ['B'], points: 1,
                    logic: [],
                    response: [
                        'The fact that the MIRROR (not the figure!) is held upside-down will make no difference to the reflection'
                    ]},
                { id: 36, name: 'Which is the odd one out?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'CUCKOO-PINT is a flower, the more commonly known anum or wale-robin. All th others are birds'
                    ]},
                { id: 37, name: 'Which row is wrong?',
                    correct_answer: ['C'], points: 1,
                    logic: [],
                    response: [
                        'Except for C, wach row contains 1 equilateral triangle, 2 right-angled tingles with the base at the bottom and 2 with the base at the top.',
                        'In C there are 3 right-angled triangles with the base at the top and only with the base as teh bottom'
                    ]},
                { id: 38, name: 'What is two days after the day after the day before yesterday?',
                    correct_answer: ['TOMORROW'], points: 1,
                    logic: [],
                    response: [
                        'The day before yesterday was two days ago. THe day after yesterday was yesterday; two days after that (yesterday) is TOMORROW'
                    ]},
                { id: 39, name: 'Where is the odd word out?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'Apart from this, the words are paired in anagrams:',
                        '(A) MEDICAL with (F) CLAIMED',
                        '(B) BATTLE with (G) TABLET',
                        '(C) ARTICLE with (E) RECITAL',
                        'No word shown forms an anagram with BALLET'
                    ]},
                { id: 40, name: 'Give words described by these definitions. Each word must contain AND',
                    correct_answer: ['OLEANDER', 'SALAMANDER', 'WANDER', 'SANDAL', 'WAND', 'HIGHLANDS', 'CANDY', 'PHILANDER', 'SQUANDER', 'COLANDER'], points: 1,
                    logic: [],
                    response: []},
                { id: 41, name: 'Which trellis is wrong?',
                    correct_answer: ['E'], points: 1,
                    logic: [],
                    response: [
                        'THe diagonal slat from top left to bottom right should pass under the other slats'
                    ]},
                { id: 42, name: 'If 3(76) equals 212 and 4(320) equals 125 what is 5(6100)?',
                    correct_answer: ['3020'], points: 1,
                    logic: [],
                    response: [
                        'The first two digits on the right side of the brackets are divided by the digit on the left to give the first digit inside the brackets',
                        'The remaining number on the right of the brackets is multiplied by the digit on the left side of the brackets to give the remaining number inside the brackets'
                    ]},
                { id: 43, name: 'Without turning the page upside down, which of these numbers will not read the same then turned upside-down?',
                    correct_answer: ['C'], points: 1,
                    logic: [],
                    response: []},
                { id: 44, name: 'One of these words is spelled incorrectly. Which One?',
                    correct_answer: ['D'], points: 1,
                    logic: [],
                    response: [
                        'This should be spelled: DESICCATED'
                    ]},
                { id: 45, name: 'Which of the symbols at the bottom should take the place of X?',
                    correct_answer: ['A'], points: 1,
                    logic: [],
                    response: [
                        'In each row, the first symbol is the same as the second in teh previous row, and the other symbols continue in the same order'
                    ]},
                { id: 46, name: 'What is X?',
                    correct_answer: ['2'], points: 1,
                    logic: [],
                    response: [
                        'The first column totals 9. THe second column totals10.',
                        'The pattern continues, so the final column should total 13, by the addition of 2'
                    ]},
                { id: 47, name: 'Supply the missing letter. (Proper nouns nt allowed!)',
                    correct_answer: ['J'], points: 1,
                    logic: [],
                    response: [
                        'The word is: ADJUST. (Datsun is not allowed)'
                    ]},
                { id: 48, name: 'Which is the odd one out?',
                    correct_answer: ['A'], points: 1,
                    logic: [],
                    response: [
                        'An anagram of HORSE. ALl the others are anagrams of fish:',
                        '(B) PIKE',
                        '(C) TROUT',
                        '(D) BASS'
                    ]},
                { id: 49, name: 'Which letter does not conform with the others?',
                    correct_answer: ['L'], points: 1,
                    logic: [],
                    response: [
                        'The block (the black portion) should be on the right of the letter'
                    ]},
                { id: 50, name: 'What WORD is represented by X?',
                    correct_answer: ['SEPTEMBER'], points: 1,
                    logic: [],
                    response: [
                        'These are the number of days in the months. September is the only month which has two 31-day months before it and one after it'
                    ]},
                { id: 51, name: 'Which is the odd one out?',
                    correct_answer: ['B'], points: 1,
                    logic: [],
                    response: [
                        'All other words contain AMEN'
                    ]},
                { id: 52, name: 'Give words to fit these definitions. Each word must contain a part of the body:',
                    correct_answer: ['MACHINE', 'ALLEGRO', 'WHEELBARROW', 'DELIVERY', 'SHIPMATE', 'ALARM'],
                    points: [
                        {count: 6, points: 1},
                        {count: 5, points: 0.5}
                    ],
                    logic: [],
                    response: []},
                { id: 53, name: 'Arrange these into six pairs:',
                    correct_answer: ['AG', 'CI', 'BF', 'DK', 'EJ', 'HI'], points: 1,
                    logic: [],
                    response: []},
                { id: 54, name: 'What is X?',
                    correct_answer: ['21'], points: 1,
                    logic: [],
                    response: [
                        'The numbers increase by 3, 4, 5, 6 and 7'
                    ]},
                { id: 55, name: 'Give words to fit these definitions. Each word start with the last two letters of the previous word.',
                    correct_answer: ['ASTERISK', 'SKATE', 'TERMINUS', 'USAGE', 'GENERAL', 'ALIMONY', 'NYLON', 'ONSET', 'ETYMOLOGIST', 'STREET'],
                    points: [
                        {count: 10, points: 1},
                        {count: 8, points: 0.5}
                    ],
                    logic: [],
                    response: []},
                { id: 56, name: 'Which are the weak links?',
                    correct_answer: ['G', 'H'], points: 1,
                    logic: [],
                    response: []},
                { id: 57, name: 'What four-letter word placed inside the brackets will complete all of these words?',
                    correct_answer: ['LIME'], points: 1,
                    logic: [],
                    response: [
                        'The words are: ALIMENT, SUBLIME, LIMERICK'
                    ]},
                { id: 58, name: 'What are X and Y?',
                    correct_answer: ['4', '11'], points: 1,
                    logic: [],
                    response: [
                        'Two alternate series',
                        'Starting with the first number: 7, 6, 5, 4, 3',
                        'Starting with the second number: 8, 9, 10, 11, 12'
                    ]},
                { id: 59, name: 'Arrange these shapes in order according to the number of sides, starting with the one with the last number:',
                    correct_answer: ['TETRAGON', 'PENTAGON', 'HEXAGON', 'HEPTAGON', 'OCTAGON', 'NONAGON', 'DECAGON'],
                    points: [
                        {count: 7, points: 1},
                        {count: 6, points: 0.5}
                    ],
                    logic: [
                        {multiple: 'all'}
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
