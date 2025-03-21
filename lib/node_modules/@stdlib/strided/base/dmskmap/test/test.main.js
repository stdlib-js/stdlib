/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var floor = require( '@stdlib/math/base/special/floor' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var dmskmap = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmskmap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dmskmap.length, 8, 'arity of 8' );
	t.end();
});

tape( 'the function applies a function to each indexed strided array element', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var i;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		if ( m[ i ] === 0 ) {
			expected[ i ] = abs( x[ i ] );
		}
	}

	dmskmap( x.length, x, 1, m, 1, y, 1, abs );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskmap( N, x, 2, m, 1, y, 1, abs );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `mask` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	m = new Uint8Array([
		0, // 0
		0,
		1, // 1
		0,
		0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dmskmap( N, x, 1, m, 2, y, 1, abs );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		abs( x[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	dmskmap( N, x, 1, m, 1, y, 2, abs );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		0.0,
		0.0,
		abs( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var m;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = dmskmap( x.length, x, 1, m, 1, y, 1, abs );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var m;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dmskmap( -1, x, 1, m, 1, y, 1, abs );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	dmskmap( 0, x, 1, m, 1, y, 1, abs );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var N;

	x = new Float64Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	m = new Uint8Array([
		1, // 2
		0, // 1
		0, // 0
		0,
		0
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	dmskmap( N, x, -2, m, -1, y, -1, abs );

	expected = new Float64Array([
		0.0,
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var m;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0, // 2
		-6.0
	]);
	m = new Uint8Array([
		0, // 2
		0,
		1, // 1
		0,
		1, // 0
		0
	]);
	y = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	dmskmap( N, x, 2, m, -2, y, -1, abs );

	expected = new Float64Array([
		abs( x[ 4 ] ),
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var m0;
	var y0;
	var x1;
	var m1;
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
	m0 = new Uint8Array([
		0,
		0,
		0, // 0
		1, // 1
		0, // 2
		0
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
	m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*2 ); // begin at 3rd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = floor( x0.length / 2 );

	dmskmap( N, x1, -2, m1, 1, y1, 1, abs );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x0[ 5 ] ),
		0.0,
		abs( x0[ 1 ] )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});
