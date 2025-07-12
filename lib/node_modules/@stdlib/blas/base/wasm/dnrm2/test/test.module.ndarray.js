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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Memory = require( '@stdlib/wasm/memory' );
var Float64Array = require( '@stdlib/array/float64' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has an `ndarray` method which has an arity of 4', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'a module instance has an `ndarray` method which calculates the L2-norm of a vector', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] ) );

	nrm2 = mod.ndarray( 6, xp, 1, 0 );
	t.strictEqual( nrm2, sqrt( 55.0 ), 'returns expected value' );

	// Short datasets:
	xp = 0;

	mod.write( xp, new Float64Array( [ -4.0 ] ) );

	nrm2 = mod.ndarray( 1, xp, 1, 0 );
	t.strictEqual( nrm2, 4.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `stride` parameter', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

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

	nrm2 = mod.ndarray( 4, xp, 2, 0 );
	t.strictEqual( nrm2, 5.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a negative `stride`', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

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

	nrm2 = mod.ndarray( 4, xp, -2, 6 );
	t.strictEqual( nrm2, 5.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` offset', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

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

	nrm2 = mod.ndarray( 4, xp, 2, 1 );
	t.strictEqual( nrm2, 5.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which returns `0`', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );

	nrm2 = mod.ndarray( -1, xp, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	nrm2 = mod.ndarray( 0, xp, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	t.end();
});
