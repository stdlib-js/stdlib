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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var muladd = require( '@stdlib/complex/float32/base/mul-add' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var caxpb = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( caxpb instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof caxpb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( caxpb.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies each element by a scalar constant and adds a scalar constant to each result', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, 0.0 );

	x = new Complex64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Complex64Array([
		7.0,
		8.0,
		-10.0,
		7.0,
		-3.0,
		3.0,
		-15.0,
		7.0
	]);

	caxpb( x.length, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var alpha;
	var beta;
	var out;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 3.0, 3.0 );
	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = caxpb( x.length, alpha, beta, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 10.0, 10.0 );
	x = new Complex64Array([
		3.0,
		-4.0,
		1.0,
		-2.0
	]);
	expected = new Complex64Array([
		3.0,
		-4.0,
		1.0,
		-2.0
	]);

	caxpb( 0, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	caxpb( -4, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `1`, the function adds `beta` to each element', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 1.0, 0.0 );
	beta = new Complex64( 5.0, -3.0 );

	x = new Complex64Array([
		2.0,
		-3.0,
		-1.0,
		4.0,
		5.0,
		-2.0
	]);
	expected = new Complex64Array([
		7.0,
		-6.0,
		4.0,
		1.0,
		10.0,
		-5.0
	]);

	caxpb( x.length, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'when `beta` equals `0`, the function multiplies each element by `alpha`', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 0.0, 0.0 );

	x = new Complex64Array([
		2.0,
		-3.0,
		-1.0,
		4.0,
		5.0,
		-2.0
	]);
	expected = new Complex64Array([
		7.0,
		-4.0,
		-6.0,
		7.0,
		12.0,
		1.0
	]);

	caxpb( x.length, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, 0.0 );

	x = new Complex64Array([
		4.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		-3.0, // 1
		5.0,  // 1
		0.0,
		0.0,
		-1.0, // 2
		2.0   // 2
	]);
	expected = new Complex64Array([
		7.0,   // 0
		8.0,   // 0
		0.0,
		0.0,
		-10.0, // 1
		7.0,   // 1
		0.0,
		0.0,
		-3.0,  // 2
		3.0    // 2
	]);

	caxpb( 3, alpha, beta, x, 2, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, 0.0 );

	x = new Complex64Array([
		-1.0, // 2
		2.0,  // 2
		0.0,
		0.0,
		-3.0, // 1
		5.0,  // 1
		0.0,
		0.0,
		4.0,  // 0
		2.0   // 0
	]);
	expected = new Complex64Array([
		-3.0,  // 2
		3.0,   // 2
		0.0,
		0.0,
		-10.0, // 1
		7.0,   // 1
		0.0,
		0.0,
		7.0,   // 0
		8.0    // 0
	]);

	caxpb( 3, alpha, beta, x, -2, x.length-1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 1.0, 0.0 );

	x = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		0.0,  // 1
		0.0,  // 1
		5.0,
		6.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		11.0, // 0
		-5.0, // 0
		1.0,  // 1
		0.0,  // 1
		5.0,
		6.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	caxpb( 2, alpha, beta, x, 1, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently multiplies and adds a constant to each element', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var z;
	var i;

	alpha = new Complex64( 2.0, 1.0 );
	beta = new Complex64( 3.0, -1.0 );

	x = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		x.set( z, i );
		expected.set( muladd( alpha, z, beta ), i );
	}
	caxpb( x.length, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		x.set( z, i );
		expected.set( muladd( alpha, z, beta ), i );
	}
	caxpb( x.length, alpha, beta, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});
