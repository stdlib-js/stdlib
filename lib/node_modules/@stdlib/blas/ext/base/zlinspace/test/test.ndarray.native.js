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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zlinspace = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( zlinspace instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlinspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( zlinspace.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0,
		3.0,
		-7.0,
		0.0,
		1.0,
		8.0,
		-2.0,
		4.0,
		3.0
	]);
	expected = new Complex128Array([
		1.0,
		2.0,
		2.0,
		4.0,
		3.0,
		6.0,
		4.0,
		8.0,
		5.0,
		10.0,
		6.0,
		12.0,
		7.0,
		14.0,
		8.0,
		16.0
	]);

	zlinspace( x.length, new Complex128( 1.0, 2.0 ), new Complex128( 8.0, 16.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 1.0, 0.0, 2.0, 1.0 ] );

	zlinspace( x.length, new Complex128( 1.0, 0.0 ), new Complex128( 3.0, 2.0 ), false, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function writes a single value to the input array', opts, function test( t ) {
	var expected;
	var x;

	// When `endpoint` is `true`, write `stop`:
	x = new Complex128Array( [ 0.0, 0.0 ] );
	expected = new Complex128Array( [ 3.0, 4.0 ] );

	zlinspace( 1, new Complex128( 1.0, 2.0 ), new Complex128( 3.0, 4.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	// When `endpoint` is `false`, write `start`:
	x = new Complex128Array( [ 0.0, 0.0 ] );
	expected = new Complex128Array( [ 1.0, 2.0 ] );

	zlinspace( 1, new Complex128( 1.0, 2.0 ), new Complex128( 3.0, 4.0 ), false, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	out = zlinspace( x.length, new Complex128( 0.0, 0.0 ), new Complex128( 5.0, 5.0 ), false, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );
	expected = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );

	zlinspace( 0, new Complex128( 0.0, 0.0 ), new Complex128( 10.0, 10.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	zlinspace( -4, new Complex128( 0.0, 0.0 ), new Complex128( 10.0, 10.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		2.0,  // 0
		1.0,  // 0
		-3.0,
		-2.0,
		-5.0, // 1
		4.0,  // 1
		7.0,
		-6.0,
		6.0,  // 2
		3.0   // 2
	]);
	expected = new Complex128Array([
		1.0,  // 0
		0.0,  // 0
		-3.0,
		-2.0,
		2.0,  // 1
		1.0,  // 1
		7.0,
		-6.0,
		3.0,  // 2
		2.0   // 2
	]);

	zlinspace( 3, new Complex128( 1.0, 0.0 ), new Complex128( 4.0, 3.0 ), false, x, 2, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		2.0,  // 2
		1.0,  // 2
		-3.0,
		-2.0,
		-5.0, // 1
		4.0,  // 1
		7.0,
		-6.0,
		6.0,  // 0
		3.0   // 0
	]);
	expected = new Complex128Array([
		3.0,  // 2
		2.0,  // 2
		-3.0,
		-2.0,
		2.0,  // 1
		1.0,  // 1
		7.0,
		-6.0,
		1.0,  // 0
		0.0   // 0
	]);

	zlinspace( 3, new Complex128( 1.0, 0.0 ), new Complex128( 3.0, 2.0 ), true, x, -2, x.length-1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		1.0,
		-2.0,
		2.0,  // 0
		3.0,  // 0
		3.0,  // 1
		4.0,  // 1
		4.0,  // 2
		5.0,  // 2
		6.0,
		7.0,
		7.0,
		8.0
	]);
	expected = new Complex128Array([
		1.0,
		-2.0,
		-1.0, // 0
		0.0,  // 0
		-2.0, // 1
		-1.0, // 1
		-3.0, // 2
		-2.0, // 2
		6.0,
		7.0,
		7.0,
		8.0
	]);

	zlinspace( 3, new Complex128( -1.0, 0.0 ), new Complex128( -4.0, -3.0 ), false, x, 1, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});
