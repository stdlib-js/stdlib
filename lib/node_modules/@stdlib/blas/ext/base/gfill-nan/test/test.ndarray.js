/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gfillNaN = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfillNaN, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gfillNaN.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function replaces `NaN` values in a strided array', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,
		2.0,
		NaN,
		5.0,
		-1.0,
		NaN,
		-5.0,
		6.0
	];
	expected = [
		0.0,
		2.0,
		0.0,
		5.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	];

	gfillNaN( x.length, 0.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ NaN, 2.0 ];
	expected = [ 5.0, 2.0 ];

	gfillNaN( x.length, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces `NaN` values in a strided array (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,
		2.0,
		NaN,
		5.0,
		-1.0,
		NaN,
		-5.0,
		6.0
	];
	expected = [
		0.0,
		2.0,
		0.0,
		5.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	];

	gfillNaN( x.length, 0.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, NaN, 3.0, NaN, 5.0 ];
	out = gfillNaN( x.length, 0.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var x;

	x = [ NaN, -4.0, 1.0 ];

	gfillNaN( 0, 0.0, x, 1, 0 );
	t.ok( isnan( x[ 0 ] ), 'returns expected value' );
	t.strictEqual( x[ 1 ], -4.0, 'returns expected value' );
	t.strictEqual( x[ 2 ], 1.0, 'returns expected value' );

	x = [ NaN, -4.0, 1.0 ];
	gfillNaN( -4, 0.0, x, 1, 0 );
	t.ok( isnan( x[ 0 ] ), 'returns expected value' );
	t.strictEqual( x[ 1 ], -4.0, 'returns expected value' );
	t.strictEqual( x[ 2 ], 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		NaN   // 2
	];
	expected = [
		0.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 2
	];

	gfillNaN( 3, 0.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,  // 0
		2.0,
		-3.0,
		5.0,
		NaN,  // 1
		2.0,
		-5.0,
		6.0
	];
	expected = [
		0.0,  // 0
		2.0,
		-3.0,
		5.0,
		0.0,  // 1
		2.0,
		-5.0,
		6.0
	];

	gfillNaN( 2, 0.0, toAccessorArray( x ), 4, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		NaN   // 0
	];
	expected = [
		0.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 0
	];

	gfillNaN( 3, 0.0, x, -2, 4 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		NaN,  // 1
		2.0,
		-3.0,
		5.0,
		NaN,  // 0
		2.0,
		-5.0,
		6.0
	];
	expected = [
		0.0,  // 1
		2.0,
		-3.0,
		5.0,
		0.0,  // 0
		2.0,
		-5.0,
		6.0
	];

	gfillNaN( 2, 0.0, toAccessorArray( x ), -4, 4 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		NaN,  // 0
		3.0,
		NaN,  // 1
		5.0,
		6.0   // 2
	];
	expected = [
		1.0,
		0.0,  // 0
		3.0,
		0.0,  // 1
		5.0,
		6.0   // 2
	];

	gfillNaN( 3, 0.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		NaN,  // 0
		3.0,
		NaN,  // 1
		5.0,
		6.0   // 2
	];
	expected = [
		1.0,
		0.0,  // 0
		3.0,
		0.0,  // 1
		5.0,
		6.0   // 2
	];

	gfillNaN( 3, 0.0, toAccessorArray( x ), 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
