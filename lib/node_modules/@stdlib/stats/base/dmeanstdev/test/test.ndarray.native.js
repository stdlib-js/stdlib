/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var floor = require( '@stdlib/math/base/special/floor' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dmeanstdev = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dmeanstdev instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmeanstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( dmeanstdev.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the arithmetic mean and population standard deviation of a strided array', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 0, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.5, sqrt( 53.5/x.length ) ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 0, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ -4.0, 0.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 0, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the arithmetic mean and sample standard deviation of a strided array', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 1, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.5, sqrt( 53.5/(x.length-1) ) ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 1, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ -4.0, 0.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, 1, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` values', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( 0, 1, x, 1, 0, out, 1, 0 );

	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdev( -1, 1, x, 1, 0, out, 1, 0 );

	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( 1, 0, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 1.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns a standard deviation equal to `NaN`', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdev( 1, 1, x, 1, 0, out, 1, 0 );

	t.strictEqual( v[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, x.length, x, 0, 0, out, 1, 0 );

	t.strictEqual( v[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, x.length, x, 1, 0, out, 1, 0 );

	t.strictEqual( v[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdev( x.length, x.length+1, x, 1, 0, out, 1, 0 );

	t.strictEqual( v[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', opts, function test( t ) {
	var expected;
	var out;
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	out = new Float64Array( 4 );

	N = floor( x.length / 2 );
	v = dmeanstdev( N, 1, x, 2, 0, out, 2, 0 );

	expected = new Float64Array( [ 1.25, 0.0, 2.5, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative `stride` parameters', opts, function test( t ) {
	var expected;
	var out;
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	out = new Float64Array( 4 );

	N = floor( x.length / 2 );
	v = dmeanstdev( N, 1, x, -2, 6, out, -2, 2 );

	expected = new Float64Array( [ 2.5, 0.0, 1.25, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns an arithmetic mean equal to the first element and a standard deviation of `0`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	out = new Float64Array( 2 );

	v = dmeanstdev( x.length, 1, x, 0, 0, out, 1, 0 );

	expected = new Float64Array( [ 1.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports `offset` parameters', opts, function test( t ) {
	var expected;
	var out;
	var N;
	var x;
	var v;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	out = new Float64Array( 4 );
	N = floor( x.length / 2 );

	v = dmeanstdev( N, 1, x, 2, 1, out, 2, 1 );

	expected = new Float64Array( [ 0.0, 1.25, 0.0, 2.5 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});
