/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dminheapSiftDown = tryRequire( resolve( __dirname, './../lib/dminheap_sift_down.native.js' ) );
var opts = {
	'skip': ( dminheapSiftDown instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dminheapSiftDown, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( dminheapSiftDown.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function sifts a value down a strided min-heap', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 2.0, 4.0, 3.0, 7.0, 5.0 ] );

	dminheapSiftDown( 5, 0, 7.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 9.0, 2.0, 5.0, 6.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 2.0, 9.0, 6.0 ] );

	dminheapSiftDown( 5, 1, 9.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = dminheapSiftDown( 5, 0, 7.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 3.0, -4.0, 1.0 ] );

	dminheapSiftDown( 0, 0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dminheapSiftDown( -4, 0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0  // 2
	]);
	expected = new Float64Array([
		2.0, // 0
		0.0,
		7.0, // 1
		0.0,
		3.0  // 2
	]);

	dminheapSiftDown( 3, 0, 7.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		3.0, // 2
		0.0,
		2.0, // 1
		0.0,
		1.0  // 0
	]);
	expected = new Float64Array([
		3.0, // 2
		0.0,
		7.0, // 1
		0.0,
		2.0  // 0
	]);

	dminheapSiftDown( 3, 0, 7.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0, // 3
		5.0  // 4
	]);
	expected = new Float64Array([
		0.0,
		2.0, // 0
		4.0, // 1
		3.0, // 2
		7.0, // 3
		5.0  // 4
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	dminheapSiftDown( 5, 0, 7.0, x1, 1 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
