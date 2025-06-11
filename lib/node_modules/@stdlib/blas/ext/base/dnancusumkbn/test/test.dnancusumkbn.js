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
var Float64Array = require( '@stdlib/array/float64' );
var dnancusumkbn = require( './../lib/dnancusumkbn.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnancusumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( dnancusumkbn.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function computes the cumulative sum (ignoring NaN values)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, 2.0, NaN, 4.0, NaN ] );
	y = new Float64Array( x.length );

	dnancusumkbn( x.length, 0.0, x, 1, y, 1 );
	expected = new Float64Array([
		1.0,
		3.0,
		3.0,
		7.0,
		7.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, NaN, NaN, 5.0 ] );
	y = new Float64Array( x.length );

	dnancusumkbn( x.length, 10.0, x, 1, y, 1 );
	expected = new Float64Array([
		11.0,
		13.0,
		13.0,
		13.0,
		18.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	y = new Float64Array( x.length );
	dnancusumkbn( x.length, 0.0, x, 1, y, 1 );
	expected = new Float64Array([
		0.0,
		0.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, NaN, 3.0, NaN ] );
	y = new Float64Array( x.length );
	dnancusumkbn( x.length, 0.0, x, 1, y, 1 );

	expected = new Float64Array([
		1.0,
		1.0,
		4.0,
		4.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 1.0e100, NaN, -1.0e100 ] );
	y = new Float64Array( x.length );
	dnancusumkbn( x.length, 0.0, x, 1, y, 1 );

	expected = new Float64Array([
		1.0,
		1.0e100,
		1.0e100,
		1.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( 1e3 );
	y = new Float64Array( x.length );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i + 1;
		if ( i === 0 ) {
			expected[ i ] += x[ i ];
		} else {
			expected[ i ] += expected[ i-1 ] + x[ i ];
		}
	}
	dnancusumkbn( x.length, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = dnancusumkbn( x.length, 0.0, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	dnancusumkbn( -1, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	dnancusumkbn( 0, 0.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		NaN, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);

	dnancusumkbn( 3, 0.0, x, 2, y, 1 );

	expected = new Float64Array( [ 1.0, 1.0, 6.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		NaN, // 2
		NaN,
		5.0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);

	dnancusumkbn( 3, 0.0, x, 1, y, 2 );

	expected = new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		NaN, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);

	dnancusumkbn( 3, 0.0, x, -2, y, -1 );

	expected = new Float64Array( [ 8.0, 8.0, 5.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		NaN, // 1
		NaN,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);

	dnancusumkbn( 3, 0.0, x, 2, y, -1 );

	expected = new Float64Array( [ 6.0, 1.0, 1.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		NaN, // 2
		NaN,
		4.0, // 1
		5.0,
		6.0  // 0
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
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at 4th element

	dnancusumkbn( 3, 0.0, x1, -2, y1, 1 );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 6.0, 10.0, 10.0 ] );

	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});
