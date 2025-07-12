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
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sscal = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( sscal instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( sscal.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function multiplies `x` by a constant', opts, function test( t ) {
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
		20.0,
		10.0,
		-15.0,
		25.0,
		-5.0,
		10.0,
		-25.0,
		30.0
	]);

	sscal( x.length, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	expected = new Float32Array( [ 5.0, 10.0 ] );

	sscal( x.length, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = sscal( x.length, 3.0, x, 1, 0 );

	t.strictEqual( out, x, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	sscal( 0, 1.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	sscal( -4, 1.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `1`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );

	sscal( x.length, 1.0, x, 1, 0 );
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
		10.0,  // 0
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 2
	]);

	sscal( 3, 5.0, x, 2, 0 );
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
		10.0,  // 2
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 0
	]);

	sscal( 3, 5.0, x, -2, 4 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float32Array([
		1.0,
		10.0,
		3.0,
		20.0,
		5.0,
		30.0
	]);

	sscal( 3, 5.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently multiplies `x` by a constant', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var i;

	alpha = 3.0;
	x = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] * alpha;
	}
	sscal( x.length, alpha, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] * alpha;
	}
	sscal( x.length, alpha, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
