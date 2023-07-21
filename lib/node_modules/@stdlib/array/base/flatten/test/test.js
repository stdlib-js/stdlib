/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var flatten = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flatten, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function flattens an array (0d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	expected = [];
	actual = flatten( x, [], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens an array (1d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	expected = [];
	actual = flatten( x, [ 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4 ];
	actual = flatten( x, [ 4 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4 ];
	actual = flatten( x, [ 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (lexicographic; 2d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[ 1, 2, 3, 4 ],
		[ 5, 6, 7, 8 ],
		[ 9, 10, 11, 12 ],
		[ 13, 14, 15, 16 ]
	];

	expected = [];
	actual = flatten( x, [ 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5 ];
	actual = flatten( x, [ 2, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6 ];
	actual = flatten( x, [ 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 5, 6, 7 ];
	actual = flatten( x, [ 2, 3 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 5, 6, 7, 9, 10, 11 ];
	actual = flatten( x, [ 3, 3 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 4, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
	actual = flatten( x, [ 4, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	actual = flatten( x, [ 4, 4 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (colexicographic; 2d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[ 1, 2, 3, 4 ],
		[ 5, 6, 7, 8 ],
		[ 9, 10, 11, 12 ],
		[ 13, 14, 15, 16 ]
	];

	expected = [];
	actual = flatten( x, [ 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5 ];
	actual = flatten( x, [ 2, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6 ];
	actual = flatten( x, [ 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6, 3, 7 ];
	actual = flatten( x, [ 2, 3 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 2, 6, 10, 3, 7, 11 ];
	actual = flatten( x, [ 3, 3 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 4, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13, 2, 6, 10, 14 ];
	actual = flatten( x, [ 4, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16 ];
	actual = flatten( x, [ 4, 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (lexicographic; 3d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 5, 6 ],
			[ 7, 8 ]
		],
		[
			[ 9, 10 ],
			[ 11, 12 ]
		],
		[
			[ 13, 14 ],
			[ 15, 16 ]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5 ];
	actual = flatten( x, [ 2, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6 ];
	actual = flatten( x, [ 2, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
	actual = flatten( x, [ 3, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 4, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
	actual = flatten( x, [ 4, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	actual = flatten( x, [ 4, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (colexicographic; 3d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[ 1, 2 ],
			[ 3, 4 ]
		],
		[
			[ 5, 6 ],
			[ 7, 8 ]
		],
		[
			[ 9, 10 ],
			[ 11, 12 ]
		],
		[
			[ 13, 14 ],
			[ 15, 16 ]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5 ];
	actual = flatten( x, [ 2, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6 ];
	actual = flatten( x, [ 2, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 3, 7, 11, 2, 6, 10, 4, 8, 12 ];
	actual = flatten( x, [ 3, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 4, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13, 2, 6, 10, 14 ];
	actual = flatten( x, [ 4, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13, 3, 7, 11, 15, 2, 6, 10, 14, 4, 8, 12, 16 ];
	actual = flatten( x, [ 4, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (lexicographic; 4d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		],
		[
			[
				[ 9, 10 ],
				[ 11, 12 ]
			],
			[
				[ 13, 14 ],
				[ 15, 16 ]
			]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten( x, [ 2, 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6 ];
	actual = flatten( x, [ 1, 2, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = flatten( x, [ 1, 2, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 2, 2, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
	actual = flatten( x, [ 2, 2, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	actual = flatten( x, [ 2, 2, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (colexicographic; 4d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		],
		[
			[
				[ 9, 10 ],
				[ 11, 12 ]
			],
			[
				[ 13, 14 ],
				[ 15, 16 ]
			]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten( x, [ 2, 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6 ];
	actual = flatten( x, [ 1, 2, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 3, 7, 2, 6, 4, 8 ];
	actual = flatten( x, [ 1, 2, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13 ];
	actual = flatten( x, [ 2, 2, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 2, 10, 6, 14 ];
	actual = flatten( x, [ 2, 2, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ];
	actual = flatten( x, [ 2, 2, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (lexicographic; 5d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[
					[ 1, 2 ],
					[ 3, 4 ]
				]
			],
			[
				[
					[ 5, 6 ],
					[ 7, 8 ]
				]
			]
		],
		[
			[
				[
					[ 9, 10 ],
					[ 11, 12 ]
				]
			],
			[
				[
					[ 13, 14 ],
					[ 15, 16 ]
				]
			]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0, 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1, 0, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0, 1, 0 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 1, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten( x, [ 2, 1, 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6 ];
	actual = flatten( x, [ 1, 2, 1, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = flatten( x, [ 1, 2, 1, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten( x, [ 2, 2, 1, 1, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
	actual = flatten( x, [ 2, 2, 1, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	actual = flatten( x, [ 2, 2, 1, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (colexicographic; 5d)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[
					[ 1, 2 ],
					[ 3, 4 ]
				]
			],
			[
				[
					[ 5, 6 ],
					[ 7, 8 ]
				]
			]
		],
		[
			[
				[
					[ 9, 10 ],
					[ 11, 12 ]
				]
			],
			[
				[
					[ 13, 14 ],
					[ 15, 16 ]
				]
			]
		]
	];

	expected = [];
	actual = flatten( x, [ 0, 0, 0, 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 0, 0, 1, 0, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten( x, [ 1, 0, 0, 1, 0 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten( x, [ 1, 1, 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten( x, [ 1, 1, 1, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten( x, [ 2, 1, 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6 ];
	actual = flatten( x, [ 1, 2, 1, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 3, 7, 2, 6, 4, 8 ];
	actual = flatten( x, [ 1, 2, 1, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13 ];
	actual = flatten( x, [ 2, 2, 1, 1, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 2, 10, 6, 14 ];
	actual = flatten( x, [ 2, 2, 1, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ];
	actual = flatten( x, [ 2, 2, 1, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
