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
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 5', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 5, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which swaps elements in `x` and `y`', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	mod.write( xp, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	xe = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	ye = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	mod.main( 4, xp, 1, yp, 1 );

	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;
	var x;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	xbuf = new Float64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	ybuf = new Float64Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	x = new Complex128Array( xbuf.buffer );
	y = new Complex128Array( ybuf.buffer );

	mod.write( xp, x );
	mod.write( yp, y );

	xe = new Float64Array([
		0.0, // 1
		0.0, // 1
		3.0,
		4.0,
		0.0, // 2
		0.0, // 2
		7.0,
		8.0
	]);
	ye = new Float64Array([
		1.0, // 1
		2.0, // 1
		5.0, // 2
		6.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	mod.main( 2, xp, 2, yp, 1 );

	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` stride', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;
	var x;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	xbuf = new Float64Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ybuf = new Float64Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);
	x = new Complex128Array( xbuf.buffer );
	y = new Complex128Array( ybuf.buffer );

	mod.write( xp, x );
	mod.write( yp, y );

	xe = new Float64Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ye = new Float64Array([
		1.0,
		2.0,
		0.0, // 1
		0.0, // 1
		3.0,
		4.0,
		0.0, // 2
		0.0  // 2
	]);

	mod.main( 2, xp, 1, yp, 2 );

	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which returns a reference to the second input array', function test( t ) {
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
	yp = 64;

	mod.write( xp, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	out = mod.main( 4, xp, 1, yp, 1 );
	t.strictEqual( out, yp, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves both input arrays unchanged', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	mod.write( xp, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] ) ); // eslint-disable-line max-len

	xe = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	ye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.main( -1, xp, 1, yp, 1 );
	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	mod.main( 0, xp, 1, yp, 1 );
	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;
	var x;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	xbuf = new Float64Array([
		1.0, // 2
		2.0, // 2
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0,
		8.0
	]);
	ybuf = new Float64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	x = new Complex128Array( xbuf.buffer );
	y = new Complex128Array( ybuf.buffer );

	mod.write( xp, x );
	mod.write( yp, y );

	xe = new Float64Array([
		0.0, // 2
		0.0, // 2
		3.0,
		4.0,
		0.0, // 1
		0.0, // 1
		7.0,
		8.0
	]);
	ye = new Float64Array([
		1.0, // 2
		2.0, // 2
		5.0, // 1
		6.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	mod.main( 2, xp, -2, yp, -1 );

	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports complex access patterns', function test( t ) {
	var actualX;
	var actualY;
	var viewX;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
	var xe;
	var xp;
	var ye;
	var yp;
	var x;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	xbuf = new Float64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	ybuf = new Float64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	x = new Complex128Array( xbuf.buffer );
	y = new Complex128Array( ybuf.buffer );

	mod.write( xp, x );
	mod.write( yp, y );

	xe = new Float64Array([
		0.0, // 1
		0.0, // 1
		3.0,
		4.0,
		0.0, // 2
		0.0, // 2
		7.0,
		8.0
	]);
	ye = new Float64Array([
		5.0, // 2
		6.0, // 2
		1.0, // 1
		2.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	mod.main( 2, xp, 2, yp, -1 );

	actualX = new Complex128Array( 4 );
	mod.read( xp, actualX );
	viewX = new Float64Array( actualX.buffer );
	t.deepEqual( viewX, xe, 'returns expected value' );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});
