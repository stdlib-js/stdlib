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
var Float64Array = require( '@stdlib/array/float64' );
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

tape( 'a module instance has an `ndarray` method which computes the dot product of `x` and `y`', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ) );

	dot = mod.ndarray( 5, xp, 1, 0, yp, 1, 0 );
	t.strictEqual( dot, 15.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` stride', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]));
	mod.write( yp, new Float64Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]));

	dot = mod.ndarray( 3, xp, 2, 0, yp, 1, 0 );
	t.strictEqual( dot, -12.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` offset', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array([
		2.0,
		-3.0, // 0
		-5.0, // 1
		7.0,  // 2
		6.0
	]));
	mod.write( yp, new Float64Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]));

	dot = mod.ndarray( 3, xp, 1, 1, yp, 1, 0 );
	t.strictEqual( dot, -55.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` stride', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]));
	mod.write( yp, new Float64Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]));

	dot = mod.ndarray( 3, xp, 1, 0, yp, 2, 0 );
	t.strictEqual( dot, 45.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` offset', function test( t ) {
	var dot;
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
	yp = 48;

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0,
		6.0
	]));
	mod.write( yp, new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]));

	dot = mod.ndarray( 3, xp, 1, 0, yp, 1, 3 );
	t.strictEqual( dot, 62.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which returns `0.0`', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	dot = mod.ndarray( -1, 3.0, xp, 1, 0, yp, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = mod.ndarray( 0, 3.0, xp, 1, 0, yp, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports negative strides', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]));
	mod.write( yp, new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]));

	dot = mod.ndarray( 3, xp, -2, 4, yp, -1, 2 );
	t.strictEqual( dot, 67.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports complex access patterns', function test( t ) {
	var dot;
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

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]));
	mod.write( yp, new Float64Array([
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	]));

	dot = mod.ndarray( 3, xp, 2, 0, yp, -1, 3 );
	t.strictEqual( dot, 68.0, 'returns expected value' );

	t.end();
});
