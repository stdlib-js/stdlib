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
var isSameComplex64 = require( '@stdlib/assert/is-same-complex64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var csumkbn = tryRequire( resolve( __dirname, './../lib/csumkbn.native.js' ) );
var opts = {
	'skip': ( csumkbn instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( csumkbn.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the sum of all strided array elements', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, 0.0, -3.0 ] );
	v = csumkbn( x.length, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( -3.0, 3.0 ) ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = csumkbn( x.length, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( -3.0, 6.0 ) ), true, 'returns expected value' );

	x = new Complex64Array( [ -4.0, -4.0, -4.0, -4.0 ] );
	v = csumkbn( x.length, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( -8.0, -8.0 ) ), true, 'returns expected value' );

	x = new Complex64Array( [ NaN, 4.0, 4.0, NaN ] );
	v = csumkbn( x.length, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( NaN, NaN ) ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 1.0e38, -1.0e38, 1.0, 1.0e38, -1.0e38 ] );
	v = csumkbn( x.length, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( 1.0, 1.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 3.0 ] );

	v = csumkbn( 0, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( 0.0, 0.0 ) ), true, 'returns expected value' );

	v = csumkbn( -1, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( 0.0, 0.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 3.0 ] );

	v = csumkbn( 1, x, 1 );
	t.strictEqual( isSameComplex64( v, new Complex64( 1.0, -2.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		2.0,
		-7.0,
		-2.0, // 1
		3.0,  // 1
		4.0,
		2.0,
		3.0,  // 2
		-5.0  // 2
	]);

	v = csumkbn( 3, x, 2 );

	t.strictEqual( isSameComplex64( v, new Complex64( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array([
		1.0,  // 2
		2.0,  // 2
		2.0,
		-7.0,
		-2.0, // 1
		3.0,  // 1
		4.0,
		2.0,
		3.0,  // 0
		-5.0  // 0
	]);

	v = csumkbn( 3, x, -2 );

	t.strictEqual( isSameComplex64( v, new Complex64( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the sum of the first element repeated N times', opts, function test( t ) {
	var x;
	var v;

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 4.0 ] );

	v = csumkbn( x.length, x, 0 );
	t.strictEqual( isSameComplex64( v, new Complex64( 3.0, -6.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Complex64Array([
		2.0,
		1.0,
		2.0,  // 0
		-2.0, // 0
		-2.0,
		2.0,
		3.0,  // 1
		4.0,  // 1
		6.0,
		7.0,
		-8.0, // 2
		9.0   // 2
	]);

	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = csumkbn( 3, x1, 2 );
	t.strictEqual( isSameComplex64( v, new Complex64( -3.0, 11.0 ) ), true, 'returns expected value' );

	t.end();
});
