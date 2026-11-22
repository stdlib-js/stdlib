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
var tryRequire = require( '@stdlib/utils/try-require' );
var Float64Array = require( '@stdlib/array/float64' );


// VARIABLES //

var dreplicate = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dreplicate instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dreplicate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( dreplicate.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function replicates each strided array element', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 6 );

	dreplicate( x.length, 2, x, 1, 0, out, 1, 0 );
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float64Array( 12 );

	dreplicate( x.length, 3, x, 1, 0, out, 1, 0 );
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (k=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 3 );

	dreplicate( x.length, 1, x, 1, 0, out, 1, 0 );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (N=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 5.0 ] );
	out = new Float64Array( 3 );

	dreplicate( 1, 3, x, 1, 0, out, 1, 0 );
	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( 6 );

	v = dreplicate( x.length, 2, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	dreplicate( -1, 2, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	dreplicate( 0, 2, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	dreplicate( x.length, -1, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	dreplicate( x.length, 0, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	out = new Float64Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	dreplicate( 3, 2, x, 2, 0, out, 1, 0 );

	expected = new Float64Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	out = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 2
		0.0
	]);

	dreplicate( 3, 2, x, 1, 0, out, 2, 0 );

	expected = new Float64Array( [ 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 3.0, 0.0, 3.0, 0.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	out = new Float64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	]);

	dreplicate( 3, 2, x, -2, 4, out, -1, 5 );

	expected = new Float64Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

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
	out = new Float64Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0  // 3
	]);

	dreplicate( 4, 2, x, 2, 1, out, 1, 0 );

	expected = new Float64Array( [ 1.0, 1.0, -2.0, -2.0, 2.0, 2.0, 4.0, 4.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	out = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	dreplicate( 3, 2, x, 1, 0, out, 1, 2 );

	expected = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a zero `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0,
		2.0, // 0, 1, 2
		3.0
	]);
	out = new Float64Array([
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	dreplicate( 3, 2, x, 0, 1, out, 1, 0 );

	expected = new Float64Array( [ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	out = new Float64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	]);

	dreplicate( 3, 2, x, 2, 0, out, -1, 5 );

	expected = new Float64Array( [ 5.0, 5.0, 3.0, 3.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
