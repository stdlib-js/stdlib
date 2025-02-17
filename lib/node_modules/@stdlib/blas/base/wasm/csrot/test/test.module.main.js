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
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
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

tape( 'a module instance has a `main` method which has an arity of 7', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 7, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which applies a plane rotation', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var cxp;
	var cyp;
	var mem;
	var mod;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	mod.write( cxp, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( cyp, new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	cxe = new Float32Array( [ 0.8, 1.6, 2.4, 3.2, 4.0, 4.8, 5.6, 6.4 ] );
	cye = new Float32Array( [ -0.6, -1.2, -1.8, -2.4, -3.0, -3.6, -4.2, -4.8 ] ); // eslint-disable-line max-len

	mod.main( 4, cxp, 1, cyp, 1, 0.8, 0.6 );

	actualX = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 2.0 );

	actualY = new Complex64Array( 4 );
	mod.read( cyp, actualY );
	viewY = new Float32Array( actualY.buffer );
	isApprox( t, viewY, cye, 2.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var cxe;
	var cye;
	var cxp;
	var cyp;
	var mem;
	var mod;
	var cx;
	var cy;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	xbuf = new Float32Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	ybuf = new Float32Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	cx = new Complex64Array( xbuf.buffer );
	cy = new Complex64Array( ybuf.buffer );

	mod.write( cxp, cx );
	mod.write( cyp, cy );

	cxe = new Float32Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	cye = new Float32Array([
		-0.6, // 1
		-1.2, // 1
		-3.0, // 2
		-3.6, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	mod.main( 2, cxp, 2, cyp, 1, 0.8, 0.6 );

	actualX = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 2.0 );

	actualY = new Complex64Array( 4 );
	mod.read( cyp, actualY );
	viewY = new Float32Array( actualY.buffer );
	isApprox( t, viewY, cye, 2.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` stride', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var cxe;
	var cye;
	var cxp;
	var cyp;
	var mem;
	var mod;
	var cx;
	var cy;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	xbuf = new Float32Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ybuf = new Float32Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);
	cx = new Complex64Array( xbuf.buffer );
	cy = new Complex64Array( ybuf.buffer );

	mod.write( cxp, cx );
	mod.write( cyp, cy );

	cxe = new Float32Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cye = new Float32Array([
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		-1.8, // 2
		-2.4, // 2
		0.0,
		0.0
	]);

	mod.main( 2, cxp, 1, cyp, 2, 0.8, 0.6 );

	actualX = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 2.0 );

	actualY = new Complex64Array( 4 );
	mod.read( cyp, actualY );
	viewY = new Float32Array( actualY.buffer );
	isApprox( t, viewY, cye, 2.0 );

	t.end();
});

tape( 'a module instance has a `main` method which returns a reference to the output array', function test( t ) {
	var mem;
	var mod;
	var out;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 32;

	mod.write( xp, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	out = mod.main( 4, xp, 1, yp, 1, 0.8, 0.6 );
	t.strictEqual( out, yp, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves the output array unchanged', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var cxe;
	var cxp;
	var cye;
	var cyp;
	var mem;
	var mod;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	mod.write( cxp, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( cyp, new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	cxe = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cye = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.main( -1, cxp, 1, cyp, 1, 0.8, 0.6 );
	actualX = new Complex64Array( 4 );
	actualY = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	mod.read( cyp, actualY );
	viewX = new Float32Array( actualX.buffer );
	viewY = new Float32Array( actualY.buffer );
	t.deepEqual( viewX, cxe, 'returns expected value' );
	t.deepEqual( viewY, cye, 'returns expected value' );

	mod.main( 0, cxp, 1, cyp, 1, 0.8, 0.6 );
	actualX = new Complex64Array( 4 );
	actualY = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	mod.read( cyp, actualY );
	viewX = new Float32Array( actualX.buffer );
	viewY = new Float32Array( actualY.buffer );
	t.deepEqual( viewX, cxe, 'returns expected value' );
	t.deepEqual( viewY, cye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var cxe;
	var cye;
	var cxp;
	var cyp;
	var mem;
	var mod;
	var cx;
	var cy;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	xbuf = new Float32Array([
		1.0, // 2
		2.0, // 2
		3.0, // 1
		4.0, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ybuf = new Float32Array([
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0
	]);
	cx = new Complex64Array( xbuf.buffer );
	cy = new Complex64Array( ybuf.buffer );

	mod.write( cxp, cx );
	mod.write( cyp, cy );

	cxe = new Float32Array([
		0.8, // 2
		1.6, // 2
		2.4, // 1
		3.2, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cye = new Float32Array([
		-0.6, // 2
		-1.2, // 2
		0.0,
		0.0,
		-1.8, // 1
		-2.4, // 1
		0.0,
		0.0
	]);

	mod.main( 2, cxp, -1, cyp, -2, 0.8, 0.6 );

	actualX = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 2.0 );

	actualY = new Complex64Array( 4 );
	mod.read( cyp, actualY );
	viewY = new Float32Array( actualY.buffer );
	isApprox( t, viewY, cye, 2.0 );

	t.end();
});

tape( 'a module instance has a `main` method which supports complex access patterns', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var cxe;
	var cye;
	var cxp;
	var cyp;
	var mem;
	var mod;
	var cx;
	var cy;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	cxp = 0;
	cyp = 32;

	xbuf = new Float32Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	ybuf = new Float32Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	cx = new Complex64Array( xbuf.buffer );
	cy = new Complex64Array( ybuf.buffer );

	mod.write( cxp, cx );
	mod.write( cyp, cy );

	cxe = new Float32Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	cye = new Float32Array([
		-3.0, // 2
		-3.6, // 2
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	mod.main( 2, cxp, 2, cyp, -1, 0.8, 0.6 );

	actualX = new Complex64Array( 4 );
	mod.read( cxp, actualX );
	viewX = new Float32Array( actualX.buffer );
	isApprox( t, viewX, cxe, 2.0 );

	actualY = new Complex64Array( 4 );
	mod.read( cyp, actualY );
	viewY = new Float32Array( actualY.buffer );
	isApprox( t, viewY, cye, 2.0 );

	t.end();
});
