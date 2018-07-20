/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var arrayShape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arrayShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arrayShape( value );
		};
	}
});

tape( 'the function returns array dimensions (0d)', function test( t ) {
	var arr;

	arr = [];
	t.deepEqual( arrayShape( arr ), [ 0 ], 'returns expected value' );

	arr = [ [] ];
	t.deepEqual( arrayShape( arr ), [ 1, 0 ], 'returns expected value' );

	arr = [ [ [] ] ];
	t.deepEqual( arrayShape( arr ), [ 1, 1, 0 ], 'returns expected value' );

	arr = [ [], [] ];
	t.deepEqual( arrayShape( arr ), [ 2, 0 ], 'returns expected value' );

	arr = [ [ [] ], [ [] ] ];
	t.deepEqual( arrayShape( arr ), [ 2, 1, 0 ], 'returns expected value' );

	arr = [ [], [], [] ];
	t.deepEqual( arrayShape( arr ), [ 3, 0 ], 'returns expected value' );

	arr = [ [ [ [] ] ], [ [ [] ] ], [ [ [] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 0 ], 'returns expected value' );

	arr = [ [ [ [ [] ] ] ], [ [ [ [] ] ] ], [ [ [ [] ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns array dimensions (1d)', function test( t ) {
	var arr;

	arr = [ 1 ];
	t.deepEqual( arrayShape( arr ), [ 1 ], 'returns expected value' );

	arr = [ 'beep' ];
	t.deepEqual( arrayShape( arr ), [ 1 ], 'returns expected value' );

	arr = [ 1, 2 ];
	t.deepEqual( arrayShape( arr ), [ 2 ], 'returns expected value' );

	arr = [ 1, 2, 3 ];
	t.deepEqual( arrayShape( arr ), [ 3 ], 'returns expected value' );

	arr = [ [ 1 ], [ 2 ], 3 ];
	t.deepEqual( arrayShape( arr ), [ 3 ], 'returns expected value' );

	arr = [ [ 1 ], [ 2 ], null ];
	t.deepEqual( arrayShape( arr ), [ 3 ], 'returns expected value' );

	arr = [ [ [ 1 ] ], [ [ 2 ] ], null ];
	t.deepEqual( arrayShape( arr ), [ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns array dimensions (2d)', function test( t ) {
	var arr;

	arr = [ [ 1 ] ];
	t.deepEqual( arrayShape( arr ), [ 1, 1 ], 'returns expected value' );

	arr = [ [ 1 ], [ 2 ] ];
	t.deepEqual( arrayShape( arr ), [ 2, 1 ], 'returns expected value' );

	arr = [ [ 1 ], [ 2 ], [ 3 ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1 ], 'returns expected value' );

	arr = [ [ [ 1 ] ], [ [ 2 ] ], [ 3 ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1 ], 'returns expected value' );

	arr = [ [ [ 1 ] ], [ [ 2 ] ], [ null ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1 ], 'returns expected value' );

	arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 7, 8, 9 ]
	];
	t.deepEqual( arrayShape( arr ), [ 3, 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns array dimensions (3d)', function test( t ) {
	var arr;

	arr = [ [ [ 1 ] ] ];
	t.deepEqual( arrayShape( arr ), [ 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ 1 ] ], [ [ 2 ] ] ];
	t.deepEqual( arrayShape( arr ), [ 2, 1, 1 ], 'returns expected value' );

	arr = [ [ [ 1 ] ], [ [ 2 ] ], [ [ 3 ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ 1 ] ] ], [ [ [ 2 ] ] ], [ [ 3 ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ 1 ] ] ], [ [ [ 2 ] ] ], [ [ null ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1 ], 'returns expected value' );

	arr = [
		[ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ] ],
		[ [ 4, 4, 4 ], [ 5, 5, 5 ], [ 6, 6, 6 ] ],
		[ [ 7, 7, 7 ], [ 8, 8, 8 ], [ 9, 9, 9 ] ]
	];
	t.deepEqual( arrayShape( arr ), [ 3, 3, 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns array dimensions (4d)', function test( t ) {
	var arr;

	arr = [ [ [ [ 1 ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 1, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ 1 ] ] ], [ [ [ 2 ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 2, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ 1 ] ] ], [ [ [ 2 ] ] ], [ [ [ 3 ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ 1 ] ] ] ], [ [ [ [ 2 ] ] ] ], [ [ [ 3 ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ 1 ] ] ] ], [ [ [ [ 2 ] ] ] ], [ [ [ null ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1 ], 'returns expected value' );

	arr = [
		[
			[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
			[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
			[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
		],
		[
			[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
			[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
			[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
		],
		[
			[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
			[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
			[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
		]
	];
	t.deepEqual( arrayShape( arr ), [ 3, 3, 3, 3 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns array dimensions (5d)', function test( t ) {
	var arr;

	arr = [ [ [ [ [ 1 ] ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 1, 1, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ 1 ] ] ] ], [ [ [ [ 2 ] ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 2, 1, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ 1 ] ] ] ], [ [ [ [ 2 ] ] ] ], [ [ [ [ 3 ] ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ [ 1 ] ] ] ] ], [ [ [ [ [ 2 ] ] ] ] ], [ [ [ [ 3 ] ] ] ] ];
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1, 1 ], 'returns expected value' );

	arr = [ [ [ [ [ [ 1 ] ] ] ] ], [ [ [ [ [ 2 ] ] ] ] ], [ [ [ [ null ] ] ] ] ]; // eslint-disable-line max-len
	t.deepEqual( arrayShape( arr ), [ 3, 1, 1, 1, 1 ], 'returns expected value' );

	arr = [
		[
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			],
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			],
			[
				[ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
				[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
				[ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 3 ] ]
			]
		],
		[
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			],
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			],
			[
				[ [ 4, 4, 4 ], [ 4, 4, 4 ], [ 4, 4, 4 ] ],
				[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ],
				[ [ 6, 6, 6 ], [ 6, 6, 6 ], [ 6, 6, 6 ] ]
			]
		],
		[
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			],
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			],
			[
				[ [ 7, 7, 7 ], [ 7, 7, 7 ], [ 7, 7, 7 ] ],
				[ [ 8, 8, 8 ], [ 8, 8, 8 ], [ 8, 8, 8 ] ],
				[ [ 9, 9, 9 ], [ 9, 9, 9 ], [ 9, 9, 9 ] ]
			]
		]
	];
	t.deepEqual( arrayShape( arr ), [ 3, 3, 3, 3, 3 ], 'returns expected value' );

	t.end();
});
