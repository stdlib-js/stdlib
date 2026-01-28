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

/* eslint-disable node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm/memory' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var Module = require( './../lib' ).Module;


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {Collection} actual - actual values
* @param {Collection} expected - expected values
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;
	var i;

	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		if ( actual[ i ] === expected[ i ] ) {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		} else {
			delta = abs( actual[ i ] - expected[ i ] );
			tol = rtol * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. actual: '+actual[ i ]+'. expected: '+expected[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 4', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 4, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which scales elements from `x` by `alpha`', function test( t ) {
	var actualX;
	var viewX;
	var mem;
	var mod;
	var ap;
	var xe;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	ap = 48;

	mod.write( xp, new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( ap, new Float64Array( [ 0.4, -0.7 ] ) );

	xe = new Float64Array( [ 0.19, -0.17, 0.2, -0.35, 0.35, 0.2 ] );

	mod.main( 3, ap, xp, 1 );

	actualX = new Complex128Array( 3 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	isApprox( t, viewX, xe, 1.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports specifying a `x` stride', function test( t ) {
	var actualX;
	var viewX;
	var xbuf;
	var mem;
	var mod;
	var ap;
	var xe;
	var xp;
	var x;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	ap = 96;

	xbuf = new Float64Array([
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
	x = new Complex128Array( xbuf.buffer );

	mod.write( xp, x );
	mod.write( ap, new Float64Array( [ 0.4, -0.7 ] ) );

	xe = new Float64Array([
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

	mod.main( 3, ap, xp, 2 );

	actualX = new Complex128Array( 6 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	isApprox( t, viewX, xe, 3.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports specifying a negative `x` stride', function test( t ) {
	var actualX;
	var viewX;
	var xbuf;
	var mem;
	var mod;
	var ap;
	var xe;
	var xp;
	var x;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	ap = 96;

	xbuf = new Float64Array([
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
	x = new Complex128Array( xbuf.buffer );

	mod.write( xp, x );
	mod.write( ap, new Float64Array( [ 0.4, -0.7 ] ) );

	xe = new Float64Array([
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

	mod.main( 3, ap, xp, -2 );

	actualX = new Complex128Array( 6 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	isApprox( t, viewX, xe, 3.0 );

	t.end();
});

tape( 'a module instance has an `ndarray` method which returns a pointer to the output array', function test( t ) {
	var mem;
	var mod;
	var out;
	var ap;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	ap = 48;

	mod.write( xp, new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( ap, new Float64Array( [ 0.4, -0.7 ] ) );

	out = mod.main( 3, ap, xp, 1 );
	t.strictEqual( out, xp, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves the input array unchanged', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var ap;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 48;
	ap = 0;

	mod.write( xp, new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( ap, new Float64Array( [ 0.4, -0.7 ] ) );

	expected = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] );

	mod.main( 0, ap, xp, 1 );
	actual = new Complex128Array( 3 );
	mod.read( xp, actual );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	mod.main( -1, ap, xp, 1 );
	actual = new Complex128Array( 3 );
	mod.read( xp, actual );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});
