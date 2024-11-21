/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var broadcastShapes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof broadcastShapes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function broadcasts array shapes to a single shape', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ [ 1, 2 ], [ 2 ] ],
		[ [ 1, 1 ], [ 3, 4 ] ],
		[ [ 6, 7 ], [ 5, 6, 1 ], [ 7 ], [ 5, 1, 7 ] ],
		[ [ 1, 3 ], [ 3, 1 ] ],
		[ [ 1 ], [ 3 ] ],
		[ [ 2 ], [ 3, 2 ] ],
		[ [ 2, 3 ], [ 2, 3 ], [ 2, 3 ], [ 2, 3 ] ],
		[ [ 1, 2 ], [ 1, 2 ] ]
	];

	expected = [
		[ 1, 2 ],
		[ 3, 4 ],
		[ 5, 6, 7 ],
		[ 3, 3 ],
		[ 3 ],
		[ 3, 2 ],
		[ 2, 3 ],
		[ 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. Actual: ('+actual.join( ',' )+'). Expected: ('+expected[ i ].join( ',' )+').' );
	}
	t.end();
});

tape( 'the function broadcasts array shapes to a single shape (empty dims)', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ [ 1, 0 ], [ 0, 0 ] ],
		[ [ 0, 1 ], [ 0, 0 ] ],
		[ [ 1, 0 ], [ 0, 1 ] ],
		[ [ 1, 1 ], [ 0, 0 ] ],
		[ [ 1, 1 ], [ 1, 0 ] ],
		[ [ 1, 1 ], [ 0, 1 ] ],
		[ [ 0 ], [ 0, 0 ] ],
		[ [ 0 ], [ 0, 1 ] ],
		[ [ 1 ], [ 0, 0 ] ],
		[ [ 1, 1 ], [ 0 ] ],
		[ [ 1 ], [ 0, 1 ] ],
		[ [ 1 ], [ 1, 0 ] ],
		[ [ 1 ], [ 8, 0 ] ],
		[ [ 8, 1, 6, 1 ], [ 0, 1, 5 ] ],
		[ [ 8, 0, 6, 1 ], [ 1, 5 ] ]
	];

	expected = [
		[ 0, 0 ],
		[ 0, 0 ],
		[ 0, 0 ],
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 0, 0 ],
		[ 0, 0 ],
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 0 ],
		[ 8, 0 ],
		[ 8, 0, 6, 5 ],
		[ 8, 0, 6, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. Actual: ('+actual.join( ',' )+'). Expected: ('+expected[ i ].join( ',' )+').' );
	}
	t.end();
});

tape( 'the function broadcasts array shapes to a single shape (no shapes)', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[]
	];

	expected = [
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. Actual: ('+actual.join( ',' )+'). Expected: ('+expected[ i ].join( ',' )+').' );
	}
	t.end();
});

tape( 'the function broadcasts array shapes to a single shape (empty shapes (i.e., zero-dimensional array broadcasting))', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ [] ],
		[ [], [] ],
		[ [], [], [] ],
		[ [], [ 0 ] ],
		[ [ 0 ], [] ],
		[ [], [ 0, 0 ] ],
		[ [ 0, 0 ], [] ],
		[ [], [ 1, 0 ] ],
		[ [], [ 0, 1 ] ],
		[ [], [ 3, 3 ] ],
		[ [], [ 3, 3 ], [] ]
	];

	expected = [
		[],
		[],
		[],
		[ 0 ],
		[ 0 ],
		[ 0, 0 ],
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 3, 3 ],
		[ 3, 3 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. Actual: ('+actual.join( ',' )+'). Expected: ('+expected[ i ].join( ',' )+').' );
	}
	t.end();
});

tape( 'the function broadcasts array shapes to a single shape (single shape)', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		[ [ 7 ] ],
		[ [ 1, 1 ] ],
		[ [ 5, 6, 1 ] ]
	];

	expected = [
		[ 7 ],
		[ 1, 1 ],
		[ 5, 6, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. Actual: ('+actual.join( ',' )+'). Expected: ('+expected[ i ].join( ',' )+').' );
	}
	t.end();
});

tape( 'the function returns `null` if provided incompatible shapes', function test( t ) {
	var actual;
	var values;
	var i;

	values = [
		[ [ 3 ], [ 4 ] ],
		[ [ 2, 3 ], [ 2 ] ],
		[ [ 3 ], [ 3 ], [ 4 ] ],
		[ [ 1, 3, 4 ], [ 2, 3, 3 ] ],
		[ [ 1, 2 ], [ 3, 1 ], [ 3, 2 ], [ 10, 5 ] ],
		[ [ 2 ], [ 2, 3 ] ],
		[ [ 2 ], [ 2 ], [ 2 ], [ 2 ], [ 3 ], [ 3 ], [ 3 ], [ 3 ] ],
		[ [ 9, 0, 9 ], [ 0, 9, 0 ] ],
		[ [ 9, 9, 9 ], [ 0, 9, 9 ] ],
		[ [ 9, 0, 9 ], [ 9, 9, 9 ] ],
		[ [ 9, 9, 9 ], [ 9, 9, 0 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = broadcastShapes( values[ i ] );
		t.strictEqual( actual, null, 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
