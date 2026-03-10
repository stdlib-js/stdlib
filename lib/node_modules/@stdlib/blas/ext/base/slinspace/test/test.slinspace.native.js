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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var slinspace = tryRequire( resolve( __dirname, './../lib/slinspace.native.js' ) );
var opts = {
	'skip': ( slinspace instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slinspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( slinspace.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	]);

	slinspace( x.length, 1.0, 8.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0 ] );
	expected = new Float32Array( [ 1.0, 2.0 ] );

	slinspace( x.length, 1.0, 3.0, false, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = slinspace( x.length, 0.0, 5.0, false, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	slinspace( 0, 0.0, 10.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	slinspace( -4, 0.0, 10.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float32Array([
		1.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		3.0   // 2
	]);

	slinspace( 3, 1.0, 4.0, false, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float32Array([
		3.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		1.0   // 0
	]);

	slinspace( 3, 1.0, 3.0, true, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float32Array([
		1.0,
		1.0, // 0
		3.0,
		2.0, // 1
		5.0,
		3.0  // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	slinspace( 3, 1.0, 3.0, true, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
