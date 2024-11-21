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
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var flatten4dBy = require( './../lib/main.js' );


// VARIABLES //

var clbk = naryFunction( abs, 1 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flatten4dBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function flattens a nested array (lexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ -1, -2 ],
				[ -3, -4 ]
			],
			[
				[ -5, -6 ],
				[ -7, -8 ]
			]
		],
		[
			[
				[ -9, -10 ],
				[ -11, -12 ]
			],
			[
				[ -13, -14 ],
				[ -15, -16 ]
			]
		]
	];

	expected = [];
	actual = flatten4dBy( x, [ 0, 0, 0, 0 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten4dBy( x, [ 0, 0, 1, 0 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten4dBy( x, [ 1, 0, 0, 1 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten4dBy( x, [ 1, 1, 1, 1 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten4dBy( x, [ 1, 1, 1, 2 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten4dBy( x, [ 2, 1, 1, 1 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6 ];
	actual = flatten4dBy( x, [ 1, 2, 1, 2 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	actual = flatten4dBy( x, [ 1, 2, 2, 2 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 9, 13 ];
	actual = flatten4dBy( x, [ 2, 2, 1, 1 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 5, 6, 9, 10, 13, 14 ];
	actual = flatten4dBy( x, [ 2, 2, 1, 2 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	actual = flatten4dBy( x, [ 2, 2, 2, 2 ], false, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function flattens a nested array (colexicographic)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [
		[
			[
				[ -1, -2 ],
				[ -3, -4 ]
			],
			[
				[ -5, -6 ],
				[ -7, -8 ]
			]
		],
		[
			[
				[ -9, -10 ],
				[ -11, -12 ]
			],
			[
				[ -13, -14 ],
				[ -15, -16 ]
			]
		]
	];

	expected = [];
	actual = flatten4dBy( x, [ 0, 0, 0, 0 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten4dBy( x, [ 0, 0, 1, 0 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [];
	actual = flatten4dBy( x, [ 1, 0, 0, 1 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1 ];
	actual = flatten4dBy( x, [ 1, 1, 1, 1 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 2 ];
	actual = flatten4dBy( x, [ 1, 1, 1, 2 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9 ];
	actual = flatten4dBy( x, [ 2, 1, 1, 1 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 2, 6 ];
	actual = flatten4dBy( x, [ 1, 2, 1, 2 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 5, 3, 7, 2, 6, 4, 8 ];
	actual = flatten4dBy( x, [ 1, 2, 2, 2 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13 ];
	actual = flatten4dBy( x, [ 2, 2, 1, 1 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 2, 10, 6, 14 ];
	actual = flatten4dBy( x, [ 2, 2, 1, 2 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ];
	actual = flatten4dBy( x, [ 2, 2, 2, 2 ], true, clbk );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports setting the callback execution context (lexicographic)', function test( t ) {
	var ctx;
	var x;

	x = [
		[
			[
				[ -1, -2 ],
				[ -3, -4 ]
			]
		]
	];

	ctx = {
		'count': 0
	};

	flatten4dBy( x, [ 1, 1, 2, 2 ], false, fcn, ctx );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function fcn( value, indices, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		t.strictEqual( indices.length, 4, 'returns expected value' );
		t.strictEqual( value, arr[ indices[0] ][ indices[1] ][ indices[2] ][ indices[3] ], 'returns expected value' );
		t.strictEqual( arr, x, 'returns expected value' );
	}
});

tape( 'the function supports setting the callback execution context (colexicographic)', function test( t ) {
	var ctx;
	var x;

	x = [
		[
			[
				[ -1, -2 ],
				[ -3, -4 ]
			]
		]
	];

	ctx = {
		'count': 0
	};

	flatten4dBy( x, [ 1, 1, 2, 2 ], true, fcn, ctx );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function fcn( value, indices, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		t.strictEqual( indices.length, 4, 'returns expected value' );
		t.strictEqual( value, arr[ indices[0] ][ indices[1] ][ indices[2] ][ indices[3] ], 'returns expected value' );
		t.strictEqual( arr, x, 'returns expected value' );
	}
});
