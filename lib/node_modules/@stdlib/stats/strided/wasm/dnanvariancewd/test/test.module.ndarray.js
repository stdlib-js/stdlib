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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
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

tape( 'a module instance `ndarray` method calculates the population variance of a strided array (ignoring `NaN` values)', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var i;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 7, 0, xp, 1, 0 );
	t.strictEqual( y, 53.5/(7-1), 'returns expected value' );

	mod.write( xp, new Float64Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 12, 0, xp, 1, 0 );
	t.strictEqual( y, 53.5/(12-6), 'returns expected value' );

	mod.write( xp, new Float64Array( [ -4.0, NaN ] ) );
	y = mod.ndarray( 2, 0, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, NaN ] ) );
	y = mod.ndarray( 2, 0, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN ] ) );
	y = mod.ndarray( 1, 0, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 4.0 ] ) );
	y = mod.ndarray( 1, 0, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( 1e3 ) );
	for ( i = 0; i < 1e3; i++ ) {
		mod.write( xp + (i*8), new Float64Array( [ 100.0 ] ) );
	}
	y = mod.ndarray( 1000, 0, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 10, 0, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( 1e3 ) );
	for ( i = 0; i < 1e3; i++ ) {
		mod.write( xp + (i*8), new Float64Array( [ NaN ] ) );
	}
	y = mod.ndarray( 1000, 0, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'a module instance `ndarray` method calculates the sample variance of a strided array (ignoring `NaN` values)', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var i;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 7, 1, xp, 1, 0 );
	t.strictEqual( y, 53.5/(7-2), 'returns expected value' );

	mod.write( xp, new Float64Array( [ 1.0, NaN, NaN, -2.0, NaN, -4.0, NaN, 5.0, NaN, 0.0, 3.0, NaN ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 12, 1, xp, 1, 0 );
	t.strictEqual( y, 53.5/(12-7), 'returns expected value' );

	mod.write( xp, new Float64Array( [ -4.0, NaN ] ) );
	y = mod.ndarray( 2, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, NaN ] ) );
	y = mod.ndarray( 2, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN ] ) );
	y = mod.ndarray( 1, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 4.0 ] ) );
	y = mod.ndarray( 1, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( 1e3 ) );
	for ( i = 0; i < 1e3; i++ ) {
		mod.write( xp + (i*8), new Float64Array( [ 100.0 ] ) );
	}
	y = mod.ndarray( 1000, 1, xp, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ] ) ); // eslint-disable-line max-len
	y = mod.ndarray( 10, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( 1e3 ) );
	for ( i = 0; i < 1e3; i++ ) {
		mod.write( xp + (i*8), new Float64Array( [ NaN ] ) );
	}
	y = mod.ndarray( 1000, 1, xp, 1, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'a module instance `ndarray` method supports a `stride` parameter', function test( t ) {
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
	]));

	y = mod.ndarray( 5, 1, xp, 2, 0 );
	t.strictEqual( y, 6.25, 'returns expected value' );

	t.end();
});

tape( 'a module instance `ndarray` method supports a negative `stride` parameter', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var i;

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
	]));

	y = mod.ndarray( 5, 1, xp, -2, 8 );
	t.strictEqual( y, 6.25, 'returns expected value' );

	mod.write( xp, new Float64Array( 1e3 ) );
	for ( i = 0; i < 1e3; i++ ) {
		mod.write( xp + (i*8), new Float64Array( [ 100.0 ] ) );
	}
	y = mod.ndarray( 1000, 1, xp, -1, 999 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, a module instance `ndarray` method returns `0` provided the correction term is not less than `0` and the first element is not `NaN`', function test( t ) {
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

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, NaN ] ) );

	y = mod.ndarray( 6, 1, xp, 0, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	mod.write( xp, new Float64Array( [ NaN, 1.0, -2.0, -4.0, 5.0, 3.0 ] ) );
	y = mod.ndarray( 6, 1, xp, 0, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, NaN ] ) );
	y = mod.ndarray( 6, 6, xp, 0, 0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'a module instance `ndarray` method supports an `offset` parameter', function test( t ) {
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

	mod.write( xp, new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]));

	y = mod.ndarray( 5, 1, xp, 2, 1 );
	t.strictEqual( y, 6.25, 'returns expected value' );

	t.end();
});
