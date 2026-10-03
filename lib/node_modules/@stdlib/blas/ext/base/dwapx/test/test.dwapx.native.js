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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dwapx = tryRequire( resolve( __dirname, './../lib/dwapx.native.js' ) );
var opts = {
	'skip': ( dwapx instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dwapx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( dwapx.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function adds a scalar constant to each element in a strided array `x` and assigns the results to elements in a strided array `w`', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	w = new Float64Array( x.length );
	expected = new Float64Array([
		9.0,  //  4.0 + 5.0
		7.0,  //  2.0 + 5.0
		2.0,  // -3.0 + 5.0
		10.0, //  5.0 + 5.0
		4.0,  // -1.0 + 5.0
		7.0,  //  2.0 + 5.0
		0.0,  // -5.0 + 5.0
		11.0  //  6.0 + 5.0
	]);

	dwapx( x.length, 5.0, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	w = new Float64Array( x.length );
	expected = new Float64Array( [ 6.0, 7.0 ] );

	dwapx( x.length, 5.0, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float64Array( x.length );
	out = dwapx( x.length, 3.0, x, 1, w, 1 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	w = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float64Array( [ 4.0, 5.0, 6.0 ] );

	dwapx( 0, 5.0, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	dwapx( -4, 5.0, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `0`, the function assigns `x` to `w`', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	w = new Float64Array( x.length );
	expected = new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] ); // w = x

	dwapx( x.length, 0.0, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	w = new Float64Array( 3 );
	expected = new Float64Array([
		6.0,  // 1.0 + 5.0
		8.0,  // 3.0 + 5.0
		10.0  // 5.0 + 5.0
	]);

	dwapx( 3, 5.0, x, 2, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	w = new Float64Array([
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	]);
	expected = new Float64Array([
		6.0,  // 1.0 + 5.0
		30.0,
		7.0,  // 2.0 + 5.0
		10.0,
		8.0   // 3.0 + 5.0
	]);

	dwapx( 3, 5.0, x, 1, w, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var w;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	w = new Float64Array( 5 );
	expected = new Float64Array([
		7.0,  //  2.0 + 5.0
		0.0,
		0.0,  // -5.0 + 5.0
		0.0,
		11.0  //  6.0 + 5.0
	]);

	dwapx( 3, 5.0, x, -2, w, -2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var w0;
	var x1;
	var w1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	]);
	w0 = new Float64Array([
		10.0,
		10.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*2 );

	expected = new Float64Array([
		10.0,
		10.0,
		7.0, // 2.0 + 5.0
		8.0, // 3.0 + 5.0
		9.0  // 4.0 + 5.0
	]);

	dwapx( 3, 5.0, x1, 1, w1, 1 );
	t.deepEqual( w0, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently adds a constant to each element of a strided array', opts, function test( t ) {
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
		expected[ i ] = x[ i ] + alpha;
	}
	dwapx( x.length, alpha, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	w = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] + alpha;
	}
	dwapx( x.length, alpha, x, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
