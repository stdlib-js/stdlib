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
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( '@stdlib/array/base/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gwax = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gwax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( gwax.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies each element in a strided array `x` by a scalar constant and assigns the results to elements in a strided array `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	w = zeros( x.length );
	expected = [
		20.0,   // 5.0 * 4.0
		10.0,   // 5.0 * 2.0
		-15.0,  // 5.0 * -3.0
		25.0,   // 5.0 * 5.0
		-5.0,   // 5.0 * -1.0
		10.0,   // 5.0 * 2.0
		-25.0,  // 5.0 * -5.0
		30.0    // 5.0 * 6.0
	];

	gwax( x.length, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	w = zeros( x.length );
	expected = [ 5.0, 10.0 ];

	gwax( x.length, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies each element in a strided array `x` by a scalar constant and assigns the results to elements in a strided array `w` (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	w = zeros( x.length );
	expected = [
		20.0,   // 5.0 * 4.0
		10.0,   // 5.0 * 2.0
		-15.0,  // 5.0 * -3.0
		25.0,   // 5.0 * 5.0
		-5.0,   // 5.0 * -1.0
		10.0,   // 5.0 * 2.0
		-25.0,  // 5.0 * -5.0
		30.0    // 5.0 * 6.0
	];

	gwax( x.length, 5.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 1, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	w = zeros( x.length );
	expected = [ 5.0, 10.0 ];

	gwax( x.length, 5.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 1, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = zeros( x.length );
	out = gwax( x.length, 3.0, x, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 3.0, -4.0, 1.0 ];
	w = [ 4.0, 5.0, 6.0 ];
	expected = [ 4.0, 5.0, 6.0 ];

	gwax( 0, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	gwax( -4, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `1`, the function assigns `x` to `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	w = zeros( x.length );
	expected = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ]; // w = x

	gwax( x.length, 1.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	w = zeros( 3 );
	expected = [
		10.0,  // 0
		-25.0, // 1
		30.0   // 2
	];

	gwax( 3, 5.0, x, 2, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	w = zeros( 3 );
	expected = [
		10.0,  // 0
		-25.0, // 1
		30.0   // 2
	];

	gwax( 3, 5.0, toAccessorArray( x ), 2, 0, toAccessorArray( w ), 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		5.0,  // 0
		30.0,
		10.0, // 1
		10.0,
		15.0  // 2
	];

	gwax( 3, 5.0, x, 1, 0, w, 2, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		5.0,  // 0
		30.0,
		10.0, // 1
		10.0,
		15.0  // 2
	];

	gwax( 3, 5.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 2, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	w = [
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	expected = [
		10.0,  // 2
		-25.0, // 1
		30.0   // 0
	];

	gwax( 3, 5.0, x, -2, x.length-1, w, -1, w.length-1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	w = [
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	expected = [
		10.0,  // 2
		-25.0, // 1
		30.0   // 0
	];

	gwax( 3, 5.0, toAccessorArray( x ), -2, x.length-1, toAccessorArray( w ), -1, w.length-1 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	];
	w = zeros( 5 );
	expected = [
		10.0, // 0
		15.0, // 1
		20.0, // 2
		0.0,
		0.0
	];

	gwax( 3, 5.0, x, 1, 1, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	expected = [
		0.0,
		0.0,
		5.0,  // 0
		10.0, // 1
		15.0  // 2
	];

	gwax( 3, 5.0, x, 1, 0, w, 1, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies each element of a strided array by a constant', function test( t ) {
	var expected;
	var alpha;
	var x;
	var w;
	var i;

	alpha = 3.0;
	x = new Float64Array( 100 );
	w = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = alpha * x[ i ];
	}
	gwax( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	w = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = alpha * x[ i ];
	}
	gwax( x.length, alpha, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
