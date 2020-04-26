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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var floor = require( '@stdlib/math/base/special/floor' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var ccopy = tryRequire( resolve( __dirname, './../lib/ccopy.native.js' ) );
var opts = {
	'skip': ( ccopy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ccopy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( ccopy.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function copies elements from `x` into `y`', opts, function test( t ) {
	var viewX;
	var viewY;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7.0, 8.0 ] );

	ccopy( x.length, x, 1, y, 1 );

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	t.deepEqual( viewX, viewY, 'deep equal' );
	t.notEqual( y, x, 'different references' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	ccopy( N, x, 2, y, 1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewY, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);
	N = 2;

	ccopy( N, x, 1, y, 2 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );

	t.deepEqual( viewY, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = ccopy( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var viewY;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	ccopy( -1, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns `y` unchanged' );

	ccopy( 0, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var viewY;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 2
		2.0, // 2
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	ccopy( N, x, -2, y, -1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewY, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var viewY;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	ccopy( N, x, 2, y, -1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewY, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var viewY;
	var x0;
	var y0;
	var x1;
	var y1;
	var N;

	// Initial arrays...
	x0 = new Complex64Array([
		1.0,
		2.0,
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0, // 1
		8.0  // 1
	]);
	y0 = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	N = floor( x0.length / 2 );

	ccopy( N, x1, -2, y1, 1 );

	viewY = new Float32Array( y0.buffer );
	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ] );

	t.deepEqual( viewY, expected, 'deep equal' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently copies elements from `x` into `y`', opts, function test( t ) {
	var viewX;
	var viewY;
	var x;
	var y;
	var i;

	x = new Complex64Array( 100 );
	y = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x.set( [ i, i ], i );
	}

	ccopy( x.length, x, 1, y, 1 );

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	t.deepEqual( viewY, viewX, 'deep equal' );
	t.notEqual( viewY, viewX, 'different references' );

	x = new Complex64Array( 120 );
	y = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x.set( [ i*2, i*2 ], i );
	}

	ccopy( x.length, x, 1, y, 1 );

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	t.deepEqual( viewY, viewX, 'deep equal' );
	t.notEqual( viewY, viewX, 'different references' );

	t.end();
});
