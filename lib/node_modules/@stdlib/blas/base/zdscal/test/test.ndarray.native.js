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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zdscal = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( zdscal instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zdscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( zdscal.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function scales elements from `x` by `alpha`', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);

	zdscal( 4, 2.0, x, 1, 0 );

	expected = new Complex128Array([
		0.6, // 1
		0.2, // 1
		1.0, // 2
		0.0, // 2
		0.0, // 3
		1.0, // 3
		0.0, // 4
		0.4, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `x` stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
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

	zdscal( 3, 2.0, x, 2, 0 );

	expected = new Complex128Array([
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
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `x` stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
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

	zdscal( 3, 2.0, x, -2, 4 );

	expected = new Complex128Array([
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
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `x` offset', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		6.0,  // 1
		0.1,  // 2
		-0.3, // 2
		7.0,  // 3
		2.0   // 3
	]);

	zdscal( 3, 2.0, x, 1, 3 );

	expected = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		8.0,  // 1
		12.0, // 1
		0.2,  // 2
		-0.6, // 2
		14.0, // 3
		4.0   // 3
	]);
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	out = zdscal( 4, 2.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ); // eslint-disable-line max-len

	zdscal( -1, 2.0, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	zdscal( 0, 2.0, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0, // 2
		6.0, // 2
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0, // 1
		3.0  // 1
	]);

	zdscal( 2, 2.0, x, -3, 6 );

	expected = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		8.0,  // 2
		12.0, // 2
		0.1,
		-0.3,
		7.0,
		2.0,
		4.0,  // 1
		6.0   // 1
	]);
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});
