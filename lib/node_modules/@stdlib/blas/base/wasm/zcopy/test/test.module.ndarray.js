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

tape( 'a module instance has an `ndarray` method which has an arity of 7', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 7, 'returns expected value' );
	t.end();
});

tape( 'a module instance has an `ndarray` method which copies elements from `x` into `y`', function test( t ) {
	var actualY;
	var viewY;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	mod.ndarray( 4, xp, 1, 0, yp, 1, 0 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` stride', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.ndarray( 2, xp, 2, 0, yp, 1, 0 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` offset', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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
		1.0,
		2.0,
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0, // 2
		8.0  // 2
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

	ye = new Float64Array( [ 5.0, 6.0, 7.0, 8.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.ndarray( 2, xp, 1, 2, yp, 1, 0 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` stride', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );

	mod.ndarray( 2, xp, 1, 0, yp, 2, 0 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` offset', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);
	x = new Complex128Array( xbuf.buffer );
	y = new Complex128Array( ybuf.buffer );

	mod.write( xp, x );
	mod.write( yp, y );

	ye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	mod.ndarray( 2, xp, 1, 0, yp, 1, 2 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which returns a reference to the output array', function test( t ) {
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

	out = mod.ndarray( 4, xp, 1, 0, yp, 1, 0 );
	t.strictEqual( out, yp, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which leaves the output array unchanged', function test( t ) {
	var actualY;
	var viewY;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.ndarray( -1, xp, 1, 0, yp, 1, 0 );
	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	mod.ndarray( 0, xp, 1, 0, yp, 1, 0 );
	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports negative strides', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.ndarray( 2, xp, -2, 2, yp, -1, 1 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports complex access patterns', function test( t ) {
	var actualY;
	var viewY;
	var xbuf;
	var ybuf;
	var mem;
	var mod;
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

	ye = new Float64Array( [ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ] );

	mod.ndarray( 2, xp, 2, 0, yp, -1, 1 );

	actualY = new Complex128Array( 4 );
	mod.read( yp, actualY );
	viewY = new Float64Array( actualY.buffer );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});
