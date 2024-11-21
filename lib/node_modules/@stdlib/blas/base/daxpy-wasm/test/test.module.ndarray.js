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

tape( 'a module instance has an `ndarray` method which has an arity of 8', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 8, 'returns expected value' );
	t.end();
});

tape( 'a module instance has an `ndarray` method which multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var actual;
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

	expected = new Float64Array( [ 3.0, 5.0, 7.0, 9.0, 11.0 ] );

	mod.ndarray( 5, 2.0, xp, 1, 0, yp, 1, 0 );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Short datasets:
	xp = 0;
	yp = 16;

	mod.write( xp, new Float64Array( [ 1.0, 2.0 ] ) );
	mod.write( yp, new Float64Array( [ 1.0, 1.0 ] ) );

	expected = new Float64Array( [ 3.0, 5.0 ] );

	mod.ndarray( 2, 2.0, xp, 1, 0, yp, 1, 0 );

	actual = new Float64Array( 2 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which efficiently handles the case where `alpha` is `0`', function test( t ) {
	var expected;
	var actual;
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

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	mod.ndarray( 5, 0.0, xp, 1, 0, yp, 1, 0 );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` stride', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

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
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	]));
	N = 3;

	mod.ndarray( N, 2.0, xp, 2, 0, yp, 1, 0 );

	expected = new Float64Array( [ 3.0, 7.0, 11.0, 1.0, 1.0 ] );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports an `x` offset', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]));
	mod.write( yp, new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]));
	N = 3;

	mod.ndarray( N, 3.0, xp, 1, 2, yp, 1, 0 );

	expected = new Float64Array( [ 15.0, 19.0, 23.0, 9.0, 10.0 ] );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` stride', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]));
	mod.write( yp, new Float64Array([
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	]));
	N = 3;

	mod.ndarray( N, 2.0, xp, 1, 0, yp, 2, 0 );

	expected = new Float64Array( [ 3.0, 1.0, 5.0, 1.0, 7.0 ] );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports a `y` offset', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]));
	mod.write( yp, new Float64Array([
		6.0,
		7.0,
		8.0, // 0
		9.0, // 1
		10.0 // 2
	]));
	N = 3;

	mod.ndarray( N, 3.0, xp, 1, 0, yp, 1, 2 );

	expected = new Float64Array( [ 6.0, 7.0, 11.0, 15.0, 19.0 ] );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which returns a pointer to the output array', function test( t ) {
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

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	out = mod.ndarray( 5, 3.0, xp, 1, 0, yp, 1, 0 );

	t.strictEqual( out, yp, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which leaves the output array unchanged', function test( t ) {
	var expected;
	var actual;
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

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	mod.ndarray( -1, 3.0, xp, 1, 0, yp, 1, 0 );
	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	mod.ndarray( 0, 3.0, xp, 1, 0, yp, 1, 0 );
	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports negative strides', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

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
	N = 3;

	mod.ndarray( N, 3.0, xp, -2, 4, yp, -1, 2 );

	expected = new Float64Array( [ 9.0, 16.0, 23.0, 9.0, 10.0 ] );

	actual = new Float64Array( 5 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has an `ndarray` method which supports complex access patterns', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 48;

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]));
	mod.write( yp, new Float64Array([
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	]));
	N = 3;

	mod.ndarray( N, 3.0, xp, 2, 0, yp, -1, 2 );

	expected = new Float64Array( [ 22.0, 17.0, 12.0, 10.0, 11.0, 12.0 ] );

	actual = new Float64Array( 6 );
	mod.read( yp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
