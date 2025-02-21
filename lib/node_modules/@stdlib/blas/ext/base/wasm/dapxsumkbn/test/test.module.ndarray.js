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

tape( 'a module instance has an `ndarray` method which has an arity of 5', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 5, 'returns expected value' );
	t.end();
});

tape( 'a module instance has an `ndarray` method which adds a constant and calculates the sum of all strided array elements', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] ) );

	y = mod.ndarray( 6, 5.0, xp, 1, 0 );
	t.strictEqual( y, 33.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which returns `0.0`', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );

	y = mod.ndarray( 0, 5.0, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = mod.ndarray( -1, 5.0, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, a module instance has an `ndarray` method which returns the first indexed element plus a constant', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );

	y = mod.ndarray( 1, 5.0, xp, 1, 0 );
	t.strictEqual( y, 6.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `stride` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]));
	N = 4;

	y = mod.ndarray( N, 5.0, xp, 2, 0 );
	t.strictEqual( y, 25.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a negative `stride` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]));
	N = 4;

	y = mod.ndarray( N, 5.0, xp, -2, 6 );
	t.strictEqual( y, 25.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, a module instance has an `ndarray` method which returns the first element plus a constant repeated N times', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );
	N = 5;

	y = mod.ndarray( N, 5.0, xp, 0, 0 );
	t.strictEqual( y, 30.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `offset` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]));
	N = 4;

	y = mod.ndarray( N, 5.0, xp, 2, 1 );
	t.strictEqual( y, 25.0, 'returns expected value' );

	t.end();
});
