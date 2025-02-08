/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var zscal = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( zscal.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function scales elements from `zx` by `za`', function test( t ) {
	var expected;
	var delta;
	var viewX;
	var tol;
	var za;
	var zx;
	var k;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 4, za, zx, 1, 0 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.19,  // 1
		-0.17, // 1
		0.2,   // 2
		-0.35, // 2
		0.35,  // 3
		0.2,   // 3
		0.14,  // 4
		0.08,  // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);
	for ( k = 0; k < expected.length; k++ ) {
		if ( viewX[ k ] === expected[ k ] ) {
			t.strictEqual( viewX[ k ], expected[ k ], 'returns expected value' );
		} else {
			delta = abs( viewX[ k ] - expected[ k ] );
			tol = 1.0 * EPS * abs( expected[ k ] );
			t.ok( delta <= tol, 'within tolerance. x: '+viewX[ k ]+'. expected: '+expected[ k ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports a `zx` stride', function test( t ) {
	var expected;
	var delta;
	var viewX;
	var tol;
	var za;
	var zx;
	var k;

	zx = new Complex128Array([
		0.1,  // 1
		0.1,  // 1
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 3
		-0.3, // 3
		7.0,
		2.0
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 3, za, zx, 2, 0 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.11,  // 1
		-0.03, // 1
		3.0,
		6.0,
		-0.17, // 2
		0.46,  // 2
		4.0,
		7.0,
		-0.17, // 3
		-0.19, // 3
		7.0,
		2.0
	]);
	for ( k = 0; k < expected.length; k++ ) {
		if ( viewX[ k ] === expected[ k ] ) {
			t.strictEqual( viewX[ k ], expected[ k ], 'returns expected value' );
		} else {
			delta = abs( viewX[ k ] - expected[ k ] );
			tol = 5.0 * EPS * abs( expected[ k ] );
			t.ok( delta <= tol, 'within tolerance. x: '+viewX[ k ]+'. expected: '+expected[ k ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports a `zx` offset', function test( t ) {
	var expected;
	var delta;
	var viewX;
	var tol;
	var za;
	var zx;
	var k;

	zx = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		6.0,  // 1
		0.1,  // 2
		-0.3, // 2
		7.0,  // 3
		2.0   // 3
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 3, za, zx, 1, 3 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		5.8,   // 1
		-0.4,  // 1
		-0.17, // 2
		-0.19, // 2
		4.2,   // 3
		-4.1   // 3
	]);
	for ( k = 0; k < expected.length; k++ ) {
		if ( viewX[ k ] === expected[ k ] ) {
			t.strictEqual( viewX[ k ], expected[ k ], 'returns expected value' );
		} else {
			delta = abs( viewX[ k ] - expected[ k ] );
			tol = 8.0 * EPS * abs( expected[ k ] );
			t.ok( delta <= tol, 'within tolerance. x: '+viewX[ k ]+'. expected: '+expected[ k ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports a negative `zx` stride', function test( t ) {
	var expected;
	var delta;
	var viewX;
	var tol;
	var za;
	var zx;
	var k;

	zx = new Complex128Array([
		0.1,  // 3
		0.1,  // 3
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 1
		-0.3, // 1
		7.0,
		2.0
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 3, za, zx, -2, 4 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.11,  // 3
		-0.03, // 3
		3.0,
		6.0,
		-0.17, // 2
		0.46,  // 2
		4.0,
		7.0,
		-0.17, // 1
		-0.19, // 1
		7.0,
		2.0
	]);
	for ( k = 0; k < expected.length; k++ ) {
		if ( viewX[ k ] === expected[ k ] ) {
			t.strictEqual( viewX[ k ], expected[ k ], 'returns expected value' );
		} else {
			delta = abs( viewX[ k ] - expected[ k ] );
			tol = 5.0 * EPS * abs( expected[ k ] );
			t.ok( delta <= tol, 'within tolerance. x: '+viewX[ k ]+'. expected: '+expected[ k ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var za;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	za = new Complex128( 2.0, 2.0 );

	out = zscal( 4, za, zx, 1, 0 );

	t.strictEqual( out, zx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var viewX;
	var za;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	za = new Complex128( 2.0, 2.0 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	zscal( -1, za, zx, 1, 0 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	zscal( 0, za, zx, 1, 0 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var delta;
	var viewX;
	var tol;
	var za;
	var zx;
	var k;

	zx = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0, // 1
		6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0, // 2
		3.0  // 2
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 2, za, zx, 3, 3 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		5.8,  // 1
		-0.4, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.9,  // 2
		-0.2  // 2
	]);
	for ( k = 0; k < expected.length; k++ ) {
		if ( viewX[ k ] === expected[ k ] ) {
			t.strictEqual( viewX[ k ], expected[ k ], 'returns expected value' );
		} else {
			delta = abs( viewX[ k ] - expected[ k ] );
			tol = 10.0 * EPS * abs( expected[ k ] );
			t.ok( delta <= tol, 'within tolerance. x: '+viewX[ k ]+'. expected: '+expected[ k ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
