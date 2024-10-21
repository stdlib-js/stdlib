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

/* eslint-disable max-len, node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm/memory' );
var Float32Array = require( '@stdlib/array/float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
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

tape( 'a module instance has a `main` method which has an arity of 9', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 9, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which applies a plane rotation (sx=1, sy=1)', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ) );
	mod.write( yp, new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ) );

	xe = new Float32Array( [ 0.78, -0.46, -0.22, 1.06, 0.9, -0.3, -0.4 ] );
	ye = new Float32Array( [ 0.04, -0.78, 0.54, 0.08, -0.6, 0.2, 0.8 ] );

	mod.ndarray( 4, xp, 1, 0, yp, 1, 0, 0.8, 0.6 );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});

tape( 'a module instance has a `main` method which applies a plane rotation (sx=2, sy=-2)', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ) );
	mod.write( yp, new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ) );

	xe = new Float32Array( [ 0.96, 0.1, -0.76, 0.8, 0.9, -0.3, -0.02 ] );
	ye = new Float32Array( [ 0.64, -0.9, -0.3, 0.7, -0.18, 0.2, 0.28 ] );

	mod.ndarray( 4, xp, 2, 0, yp, -2, 6, 0.8, 0.6 );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 20.0 );
	isApprox( t, actualY, ye, 20.0 );

	t.end();
});

tape( 'a module instance has a `main` method which applies a plane rotation (sx=-2, sy=1)', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ) );
	mod.write( yp, new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ) );

	xe = new Float32Array( [ 0.9, 0.1, -0.22, 0.8, 0.18, -0.3, -0.02 ] );
	ye = new Float32Array( [ 0.64, -1.26, 0.54, 0.2, -0.6, 0.2, 0.8 ] );

	mod.ndarray( 4, xp, -2, 6, yp, 1, 0, 0.8, 0.6 );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 20.0 );
	isApprox( t, actualY, ye, 20.0 );

	t.end();
});

tape( 'a module instance has a `main` method which applies a plane rotation (sx=-1, sy=-2)', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ) );
	mod.write( yp, new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ) );

	xe = new Float32Array( [ 0.78, 0.26, -0.76, 1.12, 0.9, -0.3, -0.4 ] );
	ye = new Float32Array( [ 0.04, -0.9, 0.18, 0.7, -0.18, 0.2, 0.16 ] );

	mod.ndarray( 4, xp, -1, 3, yp, -2, 6, 0.8, 0.6 );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 4.0 );
	isApprox( t, actualY, ye, 4.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0
	]));
	mod.write( yp, new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]));

	mod.ndarray( 2, xp, 2, 0, yp, 1, 0, 0.8, 0.6 );

	xe = new Float32Array( [ 4.4, 2.0, 6.6, 4.0, 5.0 ] );
	ye = new Float32Array( [ 4.2, 3.8, 8.0, 9.0, 10.0 ] );

	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` offset', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0,
		5.0
	]));
	mod.write( yp, new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]));

	mod.ndarray( 2, xp, 1, 1, yp, 1, 0, 0.8, 0.6 );

	xe = new Float32Array( [ 1.0, 5.2, 6.6, 4.0, 5.0 ] );
	ye = new Float32Array( [ 3.6, 3.8, 8.0, 9.0, 10.0 ] );

	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` stride', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]));
	mod.write( yp, new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]));

	mod.ndarray( 3, xp, 1, 0, yp, 2, 0, 0.0, -1.0 );

	xe = new Float32Array( [ -1.0, -3.0, -5.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 2.0, 4.0, 3.0 ] );

	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` offset', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]));
	mod.write( yp, new Float32Array([
		6.0,
		7.0,
		8.0, // 0
		9.0, // 1
		10.0
	]));

	mod.ndarray( 2, xp, 1, 0, yp, 1, 2, 0.8, 0.6 );

	xe = new Float32Array( [ 5.6, 7.0, 3.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 6.0, 7.0, 5.8, 6.0, 10.0 ] );

	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});

tape( 'a module instance has a `main` method which returns a pointer to the second input array', function test( t ) {
	var out;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	out = mod.ndarray( 5, xp, 1, 0, yp, 1, 0, 0.8, 0.6 );

	t.strictEqual( out, yp, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves the arrays unchanged', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	xe = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	mod.ndarray( -1, 3.0, xp, 1, 0, yp, 1, 0 );
	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	mod.ndarray( 0, 3.0, xp, 1, 0, yp, 1, 0 );
	actualX = new Float32Array( 5 );
	actualY = new Float32Array( 5 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array([
		0.6,  // 3
		0.1,
		-0.5, // 2
		0.8,
		0.9,  // 1
		-0.3,
		-0.4  // 0
	]));
	mod.write( yp, new Float32Array([
		0.5,  // 0
		-0.9, // 1
		0.3,  // 2
		0.7,  // 3
		-0.6,
		0.2,
		0.8
	]));

	mod.ndarray( 4, xp, -2, 6, yp, 1, 0, 0.8, 0.6 );

	xe = new Float32Array( [ 0.9, 0.1, -0.22, 0.8, 0.18, -0.3, -0.02 ] );
	ye = new Float32Array( [ 0.64, -1.26, 0.54, 0.2, -0.6, 0.2, 0.8 ] );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 20.0 );
	isApprox( t, actualY, ye, 20.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports complex access patterns', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 56;

	mod.write( xp, new Float32Array([
		0.6, // 1
		0.1, // 0
		-0.5,
		0.8,
		0.9,
		-0.3,
		-0.4
	]));
	mod.write( yp, new Float32Array([
		0.5,  // 1
		-0.9,
		0.3,  // 0
		0.7,
		-0.6,
		0.2,
		0.8
	]));

	mod.ndarray( 2, xp, -1, 1, yp, -2, 2, 0.8, 0.6 );

	xe = new Float32Array( [ 0.78, 0.26, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	ye = new Float32Array( [ 0.04, -0.9, 0.18, 0.7, -0.6, 0.2, 0.8 ] );

	actualX = new Float32Array( 7 );
	actualY = new Float32Array( 7 );
	mod.read( xp, actualX );
	mod.read( yp, actualY );
	isApprox( t, actualX, xe, 6.0 );
	isApprox( t, actualY, ye, 6.0 );

	t.end();
});
