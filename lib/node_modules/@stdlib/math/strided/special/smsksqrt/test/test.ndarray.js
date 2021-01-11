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
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var smsksqrt = require( './../lib/ndarray.js' );


// VARIABLES //

var rand = uniform( 0.0, 200.0 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof smsksqrt, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( smsksqrt.length, 10, 'arity of 10' );
	t.end();
});

tape( 'the function computes the principal square root of each element according to a mask array', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var i;

	x = new Float32Array( 10 );
	m = new Uint8Array( x.length );
	y = new Float32Array( x.length );

	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rand();
		if ( rand() < 0.8 ) {
			expected[ i ] = sqrtf( x[ i ] );
		} else {
			m[ i ] = 1;
			expected[ i ] = y[ i ];
		}
	}

	smsksqrt( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smsksqrt( N, x, 2, 0, m, 1, 0, y, 1, 0 );

	expected = new Float32Array([
		sqrtf( x[ 0 ] ),
		y[ 1 ],
		sqrtf( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smsksqrt( N, x, 1, 2, m, 1, 0, y, 1, 0 );

	expected = new Float32Array([
		sqrtf( x[ 2 ] ),
		y[ 1 ],
		sqrtf( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a mask stride', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		0,
		1, // 1
		0,
		0  // 2
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smsksqrt( N, x, 1, 0, m, 2, 0, y, 1, 0 );

	expected = new Float32Array([
		sqrtf( x[ 0 ] ),
		y[ 1 ],
		sqrtf( x[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a mask offset', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0,
		0, // 0
		1, // 1
		0, // 2
		0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	smsksqrt( N, x, 1, 0, m, 1, 1, y, 1, 0 );

	expected = new Float32Array([
		sqrtf( x[ 0 ] ),
		y[ 1 ],
		sqrtf( x[ 2 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	smsksqrt( N, x, 1, 0, m, 1, 0, y, 2, 0 );

	expected = new Float32Array([
		sqrtf( x[ 0 ] ),
		0.0,
		y[ 2 ],
		0.0,
		sqrtf( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0
	]);
	y = new Float32Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	smsksqrt( N, x, 1, 0, m, 1, 0, y, 1, 2 );

	expected = new Float32Array([
		0.0,
		0.0,
		sqrtf( x[ 0 ] ),
		y[ 3 ],
		sqrtf( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var m;
	var y;

	x = new Float32Array( 5 );
	m = new Uint8Array( x.length );
	y = new Float32Array( x.length );

	out = smsksqrt( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var m;
	var y;

	x = new Float32Array( [ rand(), rand(), rand(), rand(), rand() ] );
	m = new Uint8Array( x.length );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	smsksqrt( -1, x, 1, 0, m, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	smsksqrt( 0, x, 1, 0, m, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	m = new Uint8Array([
		0, // 2
		0,
		1, // 1
		0,
		0  // 0
	]);
	y = new Float32Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	smsksqrt( N, x, -2, x.length-1, m, -2, m.length-1, y, -1, y.length-2 );

	expected = new Float32Array([
		0.0,
		sqrtf( x[ 0 ] ),
		y[ 2 ],
		sqrtf( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var m;
	var y;
	var N;

	x = new Float32Array([
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	m = new Uint8Array([
		0, // 0
		1, // 1
		0, // 2
		0,
		0,
		0
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

	smsksqrt( N, x, 2, 1, m, 1, 0, y, -1, y.length-1 );

	expected = new Float32Array([
		0.0,
		0.0,
		0.0,
		sqrtf( x[ 5 ] ),
		y[ 4 ],
		sqrtf( x[ 1 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
