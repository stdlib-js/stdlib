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
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var absBy = require( './../lib/main.js' );


// FUNCTIONS //

function accessor( v ) {
	if ( v === void 0 ) {
		return;
	}
	return v * 2.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof absBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( absBy.length, 7, 'arity of 7' );
	t.end();
});

tape( 'the function computes the absolute value of each indexed strided array element via a callback function', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];

	absBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	absBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	x[ 2 ] = -3.0;
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = 6.0;

	absBy( x.length, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	absBy( N, x, 2, y, 1, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	absBy( N, x, 1, y, 2, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		0.0,
		abs( x[ 1 ] * 2.0 ),
		0.0,
		abs( x[ 2 ] * 2.0 )
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = absBy( x.length, x, 1, y, 1, accessor );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	absBy( -1, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	absBy( 0, x, 1, y, 1, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	];
	y = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	];
	N = 3;

	absBy( N, x, -2, y, -1, accessor );

	expected = [
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0, // 2
		-6.0
	];
	y = [
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];
	N = 3;

	absBy( N, x, 2, y, -1, accessor );

	expected = [
		abs( x[ 4 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 0 ] * 2.0 ),
		0.0,
		0.0,
		0.0
	];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		-1.0,
		-2.0, // 2
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 0
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = 3;

	absBy( N, x1, -2, y1, 1, accessor );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x0[ 5 ] * 2.0 ),
		abs( x0[ 3 ] * 2.0 ),
		abs( x0[ 1 ] * 2.0 )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	absBy( x.length, x, 1, y, 1, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
