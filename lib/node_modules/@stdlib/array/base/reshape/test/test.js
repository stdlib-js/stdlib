/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var reshape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reshape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a reshaped nested array (2d, lexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

	expected = [ 1, 2, 3, 4, 5, 6 ];
	actual = reshape( x, [ 2, 3 ], [ 6 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];
	actual = reshape( x, [ 2, 3 ], [ 3, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 2, 3, 4, 5, 6 ] ];
	actual = reshape( x, [ 2, 3 ], [ 1, 6 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ];
	actual = reshape( x, [ 2, 3 ], [ 1, 3, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ [ [ 1, 2 ] ], [ [ 3, 4 ] ], [ [ 5, 6 ] ] ] ];
	actual = reshape( x, [ 2, 3 ], [ 1, 3, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reshaped nested array (3d, lexicographic)', function test( t ) {
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
		]
	];

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = reshape( x, [ 2, 2, 2 ], [ 8 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ];
	actual = reshape( x, [ 2, 2, 2 ], [ 4, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 2 ]
		],
		[
			[ 3, 4 ]
		],
		[
			[ 5, 6 ]
		],
		[
			[ 7, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 4, 1, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 2, 3, 4 ]
		],
		[
			[ 5, 6, 7, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 2, 1, 4 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 2 ],
			[ 3, 4 ],
			[ 5, 6 ],
			[ 7, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 1, 4, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ],
				[ 5, 6 ],
				[ 7, 8 ]
			]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 1, 1, 4, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled nested array (4d, lexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ 1, 2, 3, 4 ]
			],
			[
				[ 5, 6, 7, 8 ]
			]
		]
	];

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 8 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 4 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 1, 2, 4 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 2 ],
				[ 3, 4 ]
			],
			[
				[ 5, 6 ],
				[ 7, 8 ]
			]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 1, 2, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
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
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 1, 2, 2 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1 ],
				[ 2 ]
			],
			[
				[ 3 ],
				[ 4 ]
			]
		],
		[
			[
				[ 5 ],
				[ 6 ]
			],
			[
				[ 7 ],
				[ 8 ]
			]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 2, 2, 1 ], false );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reshaped nested array (2d, colexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

	expected = [ 1, 4, 2, 5, 3, 6 ];
	actual = reshape( x, [ 2, 3 ], [ 6 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ];
	actual = reshape( x, [ 2, 3 ], [ 3, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 4, 2, 5, 3, 6 ] ];
	actual = reshape( x, [ 2, 3 ], [ 1, 6 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 4, 2 ],
			[ 5, 3, 6 ]
		]
	];
	actual = reshape( x, [ 2, 3 ], [ 1, 2, 3 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 4, 2 ]
			],
			[
				[ 5, 3, 6 ]
			]
		]
	];
	actual = reshape( x, [ 2, 3 ], [ 1, 2, 1, 3 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reshaped nested array (3d, colexicographic)', function test( t ) {
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
		]
	];

	expected = [ 1, 5, 3, 7, 2, 6, 4, 8];
	actual = reshape( x, [ 2, 2, 2 ], [ 8 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 5, 3, 7 ], [ 2, 6, 4, 8 ] ];
	actual = reshape( x, [ 2, 2, 2 ], [ 2, 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 5 ]
		],
		[
			[ 3, 7 ]
		],
		[
			[ 2, 6 ]
		],
		[
			[ 4, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 4, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 5, 3, 7 ]
		],
		[
			[ 2, 6, 4, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 2, 1, 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 5 ],
			[ 3, 7 ],
			[ 2, 6 ],
			[ 4, 8 ]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 1, 4, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 5 ]
			],
			[
				[ 3, 7 ]
			],
			[
				[ 2, 6 ]
			],
			[
				[ 4, 8 ]
			]
		]
	];
	actual = reshape( x, [ 2, 2, 2 ], [ 1, 4, 1, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled nested array (4d, colexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ 1, 2, 3, 4 ]
			],
			[
				[ 5, 6, 7, 8 ]
			]
		]
	];

	expected = [ 1, 5, 2, 6, 3, 7, 4, 8 ];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 8 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ [ 1, 5, 2, 6 ], [ 3, 7, 4, 8 ] ];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[ 1, 5, 2, 6 ],
			[ 3, 7, 4, 8 ]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 1, 2, 4 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 5 ],
				[ 2, 6 ]
			],
			[
				[ 3, 7 ],
				[ 4, 8 ]
			]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 1, 2, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1, 5 ],
				[ 2, 6 ]
			]
		],
		[
			[
				[ 3, 7 ],
				[ 4, 8 ]
			]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 1, 2, 2 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [
		[
			[
				[ 1 ],
				[ 5 ]
			],
			[
				[ 2 ],
				[ 6 ]
			]
		],
		[
			[
				[ 3 ],
				[ 7 ]
			],
			[
				[ 4 ],
				[ 8 ]
			]
		]
	];
	actual = reshape( x, [ 1, 2, 1, 4 ], [ 2, 2, 2, 1 ], true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
