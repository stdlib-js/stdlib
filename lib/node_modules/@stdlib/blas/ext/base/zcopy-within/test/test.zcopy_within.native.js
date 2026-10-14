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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zcopyWithin = tryRequire( resolve( __dirname, './../lib/zcopy_within.native.js' ) );
var opts = {
	'skip': ( zcopyWithin instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zcopyWithin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( zcopyWithin.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function copies values within the provided double-precision complex floating-point strided array', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = zcopyWithin( 6, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = zcopyWithin( 6, 3, 0, 3, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	w = new Complex128Array( 5 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = zcopyWithin( 5, 2, 0, 5, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `target` parameter is greater than or equal to the `N` parameter, the function returns the strided array unchanged', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	actual = zcopyWithin( 6, 6, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	actual = zcopyWithin( 6, 10, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	actual = zcopyWithin( 4, 5, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `N` parameter is less than or equal to `0`, the function returns the strided array unchanged', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	actual = zcopyWithin( 0, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	actual = zcopyWithin( -1, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `start` parameter is greater than or equal to the `end` parameter, the function returns the strided array unchanged', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	actual = zcopyWithin( 6, 0, 3, 1, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	actual = zcopyWithin( 6, 0, 2, 2, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `end` parameter is greater than the number of indexed elements, the function copies elements up to the last indexed element', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	w = new Complex128Array( 5 );
	expected = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 7.0, 8.0, 9.0, 10.0 ] );

	actual = zcopyWithin( 5, 0, 2, 10, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` stride parameter', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );
	w = new Complex128Array( 4 );
	expected = new Complex128Array( [ 9.0, 10.0, 3.0, 4.0, 13.0, 14.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	actual = zcopyWithin( 4, 0, 2, 4, x, 2, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` negative stride parameter', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Complex128Array( 3 );
	expected = new Complex128Array( [ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ] );

	actual = zcopyWithin( 3, 0, 1, 3, x, -1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	w = new Complex128Array( 4 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ] );

	actual = zcopyWithin( 4, 0, 2, 4, x, -1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of zero', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	actual = zcopyWithin( 6, 1, 0, 2, x, 0, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` stride parameter', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Complex128Array( 5 );
	expected = new Complex128Array( [ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0 ] );

	actual = zcopyWithin( 3, 1, 0, 2, x, 1, w, 2 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` negative stride parameter', opts, function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	w = new Complex128Array( 6 );
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = zcopyWithin( 6, 3, 1, 4, x, 1, w, -1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var x1;
	var w;

	x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] ); // eslint-disable-line max-len

	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	w = new Complex128Array( 6 );

	zcopyWithin( 6, 0, 3, 6, x1, 1, w, 1 );

	expected = new Complex128Array( [ 1.0, 2.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 ] );

	t.strictEqual( isSameComplex128Array( x0, expected ), true, 'returns expected value' );
	t.end();
});
