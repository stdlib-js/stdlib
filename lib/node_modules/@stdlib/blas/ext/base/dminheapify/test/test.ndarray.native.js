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

var dminheapify = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dminheapify instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dminheapify, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( dminheapify.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var x;
	var y;

	x = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );
	y = dminheapify( 5, x, 1, 0 );
	t.strictEqual( y, x, 'same reference' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );
	expected = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );

	dminheapify( 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	dminheapify( -4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to a min-heap', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );
	expected = new Float64Array( [ 1.0, 5.0, 3.0, 7.0, 9.0 ] );
	dminheapify( 5, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 7.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 2.0, 4.0, 3.0, 7.0, 5.0 ] );
	dminheapify( 5, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [] );
	expected = new Float64Array( [] );
	dminheapify( 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 5.0 ] );
	expected = new Float64Array( [ 5.0 ] );
	dminheapify( 1, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 5.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 5.0 ] );
	dminheapify( 2, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		7.0,  // 0
		0.0,
		5.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		1.0,  // 3
		0.0,
		9.0   // 4
	]);
	expected = new Float64Array([
		1.0,  // 0
		0.0,
		5.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		7.0,  // 3
		0.0,
		9.0   // 4
	]);

	dminheapify( 5, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		7.0,  // 4
		0.0,
		5.0,  // 3
		0.0,
		3.0,  // 2
		0.0,
		1.0,  // 1
		0.0,
		9.0   // 0
	]);
	expected = new Float64Array([
		7.0,  // 4
		0.0,
		9.0,  // 3
		0.0,
		3.0,  // 2
		0.0,
		5.0,  // 1
		0.0,
		1.0   // 0
	]);

	dminheapify( 5, x, -2, 8 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,
		7.0,  // 0
		5.0,  // 1
		3.0,  // 2
		1.0,  // 3
		9.0,  // 4
		6.0
	]);
	expected = new Float64Array([
		1.0,
		1.0,  // 0
		5.0,  // 1
		3.0,  // 2
		7.0,  // 3
		9.0,  // 4
		6.0
	]);

	dminheapify( 5, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 0.0, 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ] );
	expected = new Float64Array( [ 0.0, 1.0, 0.0, 5.0, 0.0, 3.0, 0.0, 7.0, 0.0, 9.0 ] );
	dminheapify( 5, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
