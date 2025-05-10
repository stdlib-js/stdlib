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

/* eslint-disable node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm/memory' );
var Complex64Array = require( '@stdlib/array/complex64' );
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

tape( 'a module instance has a `main` method which scales elements from `cx` by `ca`', function test( t ) {
	var actualX;
	var viewX;
	var cap;
	var cxe;
	var cxp;
	var mem;
	var mod;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cap = 24;

	mod.write( cxp, new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( cap, new Float32Array( [ 0.4, -0.7 ] ) );

	cxe = new Float32Array( [ 0.19, -0.17, 0.2, -0.35, 0.35, 0.2 ] );

	mod.main( 3, cap, cxp, 1 );

	actualX = new Complex64Array( 3 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 1.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports specifying a `cx` stride', function test( t ) {
	var actualX;
	var viewX;
	var xbuf;
	var cap;
	var cxe;
	var cxp;
	var mem;
	var mod;
	var cx;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cap = 48;

	xbuf = new Float32Array([
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
	cx = new Complex64Array( xbuf.buffer );

	mod.write( cxp, cx );
	mod.write( cap, new Float32Array( [ 0.4, -0.7 ] ) );

	cxe = new Float32Array([
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

	mod.main( 3, cap, cxp, 2 );

	actualX = new Complex64Array( 6 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 1.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports specifying a negative `cx` stride', function test( t ) {
	var actualX;
	var viewX;
	var xbuf;
	var cap;
	var cxe;
	var cxp;
	var mem;
	var mod;
	var cx;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cap = 48;

	xbuf = new Float32Array([
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
	cx = new Complex64Array( xbuf.buffer );

	mod.write( cxp, cx );
	mod.write( cap, new Float32Array( [ 0.4, -0.7 ] ) );

	cxe = new Float32Array([
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

	mod.main( 3, cap, cxp, -2 );

	actualX = new Complex64Array( 6 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 1.0 );

	t.end();
});

tape( 'a module instance has a `main` method which returns a reference to the input array', function test( t ) {
	var cap;
	var cxp;
	var mem;
	var mod;
	var out;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cap = 24;

	mod.write( cxp, new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( cap, new Float32Array( [ 0.4, -0.7 ] ) );

	out = mod.main( 3, cap, cxp, 1 );
	t.strictEqual( out, cxp, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves the input array unchanged', function test( t ) {
	var cap;
	var cxp;
	var mem;
	var mod;
	var out;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cap = 24;

	mod.write( cxp, new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5 ] ) );
	mod.write( cap, new Float32Array( [ 0.4, -0.7 ] ) );

	out = mod.main( 0, cap, cxp, 1 );
	t.strictEqual( out, cxp, 'returns expected value' );

	out = mod.main( -1, cap, cxp, 1 );
	t.strictEqual( out, cxp, 'returns expected value' );

	t.end();
});
