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
var mapBy = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof mapBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( mapBy.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function applies a function to each indexed strided array element according to a callback function', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 2.0, 4.0, 6.0, 8.0, 10.0 ];

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'deep equal' );

	x[ 2 ] = -3.0; // sparse array
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = y.slice();
	expected[ 2 ] = 6.0;

	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );
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

	mapBy( N, x, 2, 0, y, 1, 0, abs, accessor );

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

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
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

	mapBy( N, x, 1, 2, y, 1, 0, abs, accessor );

	expected = [
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 3 ] * 2.0 ),
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

	mapBy( N, x, 1, 0, y, 2, 0, abs, accessor );

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

tape( 'the function supports a `y` offset', function test( t ) {
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
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	mapBy( N, x, 1, 0, y, 1, 2, abs, accessor );

	expected = [
		0.0,
		0.0,
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 1 ] * 2.0 ),
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

	out = mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor );

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

	mapBy( -1, x, 1, 0, y, 1, 0, abs, accessor );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	mapBy( 0, x, 1, 0, y, 1, 0, abs, accessor );
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
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	];
	N = 3;

	mapBy( N, x, -2, x.length-1, y, -1, y.length-2, abs, accessor );

	expected = [
		0.0,
		abs( x[ 0 ] * 2.0 ),
		abs( x[ 2 ] * 2.0 ),
		abs( x[ 4 ] * 2.0 ),
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
		-1.0,
		-2.0, // 0
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 2
	];
	y = [
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	N = 3;

	mapBy( N, x, 2, 1, y, -1, y.length-1, abs, accessor );

	expected = [
		0.0,
		0.0,
		0.0,
		abs( x[ 5 ] * 2.0 ),
		abs( x[ 3 ] * 2.0 ),
		abs( x[ 1 ] * 2.0 )
	];

	t.deepEqual( y, expected, 'deep equal' );
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
	mapBy( x.length, x, 1, 0, y, 1, 0, abs, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * 2.0;
	}
});
