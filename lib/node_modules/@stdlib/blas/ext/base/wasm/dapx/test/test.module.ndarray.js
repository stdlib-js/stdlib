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

tape( 'a module instance has a `ndarray` method which has an arity of 5', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.ndarray.length, 5, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `ndarray` method which adds a constant to each element of a strided array', function test( t ) {
	var expected;
	var actual;
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
	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	mod.ndarray( 5, 5.0, xp, 1, 0 );

	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method returns a reference to the input array', function test( t ) {
	var out;
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

	out = mod.ndarray( 5, 3.0, xp, 1, 0 );

	t.strictEqual( out, xp, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `ndarray` method which leaves the output array unchanged', function test( t ) {
	var expected;
	var actual;
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
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	mod.ndarray( -1, 5.0, xp, 1, 0 );
	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	mod.ndarray( 0, 5.0, xp, 1, 0 );
	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `ndarray` method which supports specifying a stride', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 2.0, -3.0, -5.0, 7.0, 6.0 ] ));

	mod.ndarray( 3, 5.0, xp, 2, 0 );
	expected = new Float64Array( [ 7.0, -3.0, 0.0, 7.0, 11.0 ] );

	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `ndarray` method which supports negative strides', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 2.0, -3.0, -5.0, 7.0, 6.0 ] ));

	mod.ndarray( 3, 5.0, xp, -2, 4 );
	expected = new Float64Array( [ 7.0, -3.0, 0.0, 7.0, 11.0 ] );

	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `ndarray` method which supports an offset parameter', function test( t ) {
	var expected;
	var actual;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ));

	mod.ndarray( 3, 5.0, xp, 2, 1 );
	expected = new Float64Array( [ 1.0, 7.0, 3.0, 9.0, 5.0 ] );

	actual = new Float64Array( 5 );
	mod.read( xp, actual );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
