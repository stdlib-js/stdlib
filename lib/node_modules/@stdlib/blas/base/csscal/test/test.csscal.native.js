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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var csscal = tryRequire( resolve( __dirname, './../lib/csscal.native.js' ) );
var opts = {
	'skip': ( csscal instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( csscal.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function scales elements from `x` by `alpha`', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2  // 4
	]);

	csscal( 4, 2.0, x, 1 );

	expected = new Complex64Array([
		0.6, // 1
		0.2, // 1
		1.0, // 2
		0.0, // 2
		0.0, // 3
		1.0, // 3
		0.0, // 4
		0.4  // 4
	]);
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `x` stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 3
		-0.3, // 3
		7.0,
		2.0
	]);

	csscal( 3, 2.0, x, 2 );

	expected = new Complex64Array([
		0.2,  // 1
		0.2,  // 1
		3.0,
		6.0,
		-1.2, // 2
		0.2,  // 2
		4.0,
		7.0,
		0.2,  // 3
		-0.6, // 3
		7.0,
		2.0
	]);
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `x` stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		0.1,  // 3
		0.1,  // 3
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 1
		-0.3, // 1
		7.0,
		2.0
	]);

	csscal( 3, 2.0, x, -2 );

	expected = new Complex64Array([
		0.2,  // 3
		0.2,  // 3
		3.0,
		6.0,
		-1.2, // 2
		0.2,  // 2
		4.0,
		7.0,
		0.2,  // 1
		-0.6, // 1
		7.0,
		2.0
	]);
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	out = csscal( 4, 2.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	csscal( -1, 2.0, x, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	csscal( 0, 2.0, x, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var cx0;
	var cx1;

	// Initial array:
	cx0 = new Complex64Array([
		0.1,
		-0.3,
		8.0,  // 1
		9.0,  // 1
		0.5,  // 2
		-0.1, // 2
		2.0,  // 3
		5.0,  // 3
		2.0,
		3.0
	]);

	// Create offset view:
	cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	csscal( 3, 2.0, cx1, 1 );

	expected = new Complex64Array([
		0.1,
		-0.3,
		16.0, // 1
		18.0, // 1
		1.0,  // 2
		-0.2, // 2
		4.0,  // 3
		10.0, // 3
		2.0,
		3.0
	]);
	t.strictEqual( isSameComplex64Array( cx0, expected ), true, 'returns expected value' );
	t.end();
});
