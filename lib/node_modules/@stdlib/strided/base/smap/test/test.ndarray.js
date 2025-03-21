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
var absf = require( '@stdlib/math/base/special/absf' );
var Float32Array = require( '@stdlib/array/float32' );
var smap = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof smap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( smap.length, 8, 'arity of 8' );
	t.end();
});

tape( 'the function applies a function to each indexed strided array element', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		expected[ i ] = absf( x[ i ] );
	}

	smap( x.length, x, 1, 0, y, 1, 0, absf );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smap( N, x, 2, 0, y, 1, 0, absf );

	expected = new Float32Array([
		absf( x[ 0 ] ),
		absf( x[ 2 ] ),
		absf( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
		-5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smap( N, x, 1, 2, y, 1, 0, absf );

	expected = new Float32Array([
		absf( x[ 2 ] ),
		absf( x[ 3 ] ),
		absf( x[ 4 ] ),
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
	var N;

	x = new Float32Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	smap( N, x, 1, 0, y, 2, 0, absf );

	expected = new Float32Array([
		absf( x[ 0 ] ),
		0.0,
		absf( x[ 1 ] ),
		0.0,
		absf( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	]);
	y = new Float32Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	smap( N, x, 1, 0, y, 1, 2, absf );

	expected = new Float32Array([
		0.0,
		0.0,
		absf( x[ 0 ] ),
		absf( x[ 1 ] ),
		absf( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = smap( x.length, x, 1, 0, y, 1, 0, absf );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	smap( -1, x, 1, 0, y, 1, 0, absf );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	smap( 0, x, 1, 0, y, 1, 0, absf );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	y = new Float32Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	smap( N, x, -2, x.length-1, y, -1, y.length-2, absf );

	expected = new Float32Array([
		0.0,
		absf( x[ 0 ] ),
		absf( x[ 2 ] ),
		absf( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		-1.0,
		-2.0, // 0
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 2
	]);
	y = new Float32Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	smap( N, x, 2, 1, y, -1, y.length-1, absf );

	expected = new Float32Array([
		0.0,
		0.0,
		0.0,
		absf( x[ 5 ] ),
		absf( x[ 3 ] ),
		absf( x[ 1 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
