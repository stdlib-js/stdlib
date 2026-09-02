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
var Complex64Array = require( '@stdlib/array/complex64' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );


// VARIABLES //

var creplicate = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( creplicate instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof creplicate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( creplicate.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function replicates each strided array element', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array( 6 );

	creplicate( x.length, 2, x, 1, 0, out, 1, 0 );
	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	out = new Complex64Array( 6 );

	creplicate( x.length, 3, x, 1, 0, out, 1, 0 );
	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (k=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array( 3 );

	creplicate( x.length, 1, x, 1, 0, out, 1, 0 );
	expected = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (N=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 5.0, 6.0 ] );
	out = new Complex64Array( 3 );

	creplicate( 1, 3, x, 1, 0, out, 1, 0 );
	expected = new Complex64Array([
		5.0,
		6.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array( 6 );

	v = creplicate( x.length, 2, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	expected = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	creplicate( -1, 2, x, 1, 0, out, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	creplicate( 0, 2, x, 1, 0, out, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	expected = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	creplicate( x.length, -1, x, 1, 0, out, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	creplicate( x.length, 0, x, 1, 0, out, 1, 0 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array( 6 );

	creplicate( 3, 2, x, 2, 0, out, 1, 0 );

	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		5.0,
		6.0,
		5.0,
		6.0,
		9.0,
		10.0,
		9.0,
		10.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array( 12 );

	creplicate( 3, 2, x, 1, 0, out, 2, 0 );

	expected = new Complex64Array([
		1.0,
		2.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		5.0,
		6.0,
		0.0,
		0.0,
		5.0,
		6.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array( 6 );

	creplicate( 3, 2, x, -2, 4, out, 1, 0 );

	expected = new Complex64Array([
		9.0,
		10.0,
		9.0,
		10.0,
		5.0,
		6.0,
		5.0,
		6.0,
		1.0,
		2.0,
		1.0,
		2.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		5.0,
		6.0,
		0.0,
		0.0,
		7.0,
		8.0
	]);
	out = new Complex64Array( 8 );

	creplicate( 4, 2, x, 2, 1, out, 1, 0 );

	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0,
		7.0,
		8.0,
		7.0,
		8.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output offset', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array( 8 );

	creplicate( 3, 2, x, 1, 0, out, 1, 2 );

	expected = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a zero `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array( 6 );

	creplicate( 3, 2, x, 0, 1, out, 1, 0 );

	expected = new Complex64Array([
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array( 6 );

	creplicate( 3, 2, x, 2, 0, out, -1, 5 );

	expected = new Complex64Array([
		9.0,
		10.0,
		9.0,
		10.0,
		5.0,
		6.0,
		5.0,
		6.0,
		1.0,
		2.0,
		1.0,
		2.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});
