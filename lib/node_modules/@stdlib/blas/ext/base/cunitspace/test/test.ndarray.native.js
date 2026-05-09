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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cunitspace = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( cunitspace instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cunitspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( cunitspace.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = cunitspace( x.length, new Complex64( 0.0, 0.0 ), x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	cunitspace( 0, new Complex64( 3.0, 0.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	cunitspace( -4, new Complex64( 3.0, 0.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array', opts, function test( t ) {
	var expected;
	var x;

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
		3.0,
		0.0,
		4.0,
		0.0,
		5.0,
		0.0,
		6.0,
		0.0
	]);

	cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array (non-zero imaginary component)', opts, function test( t ) {
	var expected;
	var x;

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
		3.0,
		-2.0,
		4.0,
		-2.0,
		5.0,
		-2.0,
		6.0,
		-2.0
	]);

	cunitspace( x.length, new Complex64( 3.0, -2.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 0
		-3.0, // 0
		4.0,
		-6.0,
		8.0,  // 1
		-9.0  // 1
	]);
	expected = new Complex64Array([
		3.0,  // 0
		0.0,  // 0
		4.0,
		-6.0,
		4.0,  // 1
		0.0   // 1
	]);

	cunitspace( 2, new Complex64( 3.0, 0.0 ), x, 2, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 1
		-3.0, // 1
		4.0,
		-6.0,
		8.0,  // 0
		-9.0  // 0
	]);
	expected = new Complex64Array([
		4.0,  // 1
		0.0,  // 1
		4.0,
		-6.0,
		3.0,  // 0
		0.0   // 0
	]);

	cunitspace( 2, new Complex64( 3.0, 0.0 ), x, -2, x.length-1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,  // 1
		-8.0, // 1
		10.0,
		-12.0
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		0.0,  // 0
		4.0,  // 1
		0.0,  // 1
		10.0,
		-12.0
	]);

	cunitspace( 2, new Complex64( 3.0, 0.0 ), x, 1, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});
