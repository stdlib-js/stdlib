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
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 3', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 3, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which calculates the sum of strided array elements (ignoring NaN values)', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0, 0.0, -3.0, 3.0, NaN ] ) ); // eslint-disable-line max-len
	v = mod.main( 11, xp, 1 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0, NaN ] ) );
	v = mod.main( 8, xp, 1 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ -4.0, NaN, -4.0 ] ) );
	v = mod.main( 3, xp, 1 );
	t.strictEqual( v, -8.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, 4.0 ] ) );
	v = mod.main( 2, xp, 1 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, NaN ] ) );
	v = mod.main( 2, xp, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN ] ) );
	v = mod.main( 1, xp, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 4.0 ] ) );
	v = mod.main( 1, xp, 1 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 1.0, 1.0e100, 1.0, -1.0e100 ] ) );
	v = mod.main( 4, xp, 1 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0` and the first element is NaN, a module instance has a `main` method which returns 0', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ NaN, -2.0, -4.0, 5.0, 3.0 ] ) );

	v = mod.main( 5, xp, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which returns `0.0`', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );

	v = mod.main( 0, xp, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = mod.main( -1, xp, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, a module instance has a `main` method which returns the first element', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );

	v = mod.main( 1, xp, 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `main` method which supports a `stride` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

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
		2.0,
		NaN,  // 4
		NaN
	]) );

	v = mod.main( 5, xp, 2 );

	t.strictEqual( v, 5.0, 'returns expected value' );
	t.end();
});

tape( 'a module instance has an `main` method which supports a negative `stride` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]) );

	v = mod.main( 5, xp, -2 );

	t.strictEqual( v, 5.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, a module instance has a `main` method which returns the sum of the first element repeated N times', function test( t ) {
	var mem;
	var mod;
	var xp;
	var v;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );

	v = mod.main( 5, xp, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	t.end();
});
