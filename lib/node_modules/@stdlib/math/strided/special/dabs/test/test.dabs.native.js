/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dabs = tryRequire( resolve( __dirname, './../lib/dabs.native.js' ) );
var opts = {
	'skip': ( dabs instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( dabs.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function computes the absolute value', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ] = abs( x[ i ] );
	}

	dabs( x.length, x, 1, y, 1 );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	dabs( N, x, 2, y, 1 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	dabs( N, x, 1, y, 2 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		0.0,
		abs( x[ 1 ] ),
		0.0,
		abs( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = dabs( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dabs( -1, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	dabs( 0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	dabs( N, x, -2, y, -1 );

	expected = new Float64Array([
		abs( x[ 0 ] ),
		abs( x[ 2 ] ),
		abs( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0, // 2
		-6.0
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

	dabs( N, x, 2, y, -1 );

	expected = new Float64Array([
		abs( x[ 4 ] ),
		abs( x[ 2 ] ),
		abs( x[ 0 ] ),
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
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

	N = floor( x0.length / 2 );

	dabs( N, x1, -2, y1, 1 );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		abs( x0[ 5 ] ),
		abs( x0[ 3 ] ),
		abs( x0[ 1 ] )
	]);

	t.deepEqual( y0, expected, 'deep equal' );
	t.end();
});
