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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sfillNaN = tryRequire( resolve( __dirname, './../lib/sfill_nan.native.js' ) );
var opts = {
	'skip': ( sfillNaN instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sfillNaN, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( sfillNaN.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function replaces `NaN` values in a strided array', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		NaN,
		2.0,
		NaN,
		5.0,
		-1.0,
		NaN,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		0.0,
		2.0,
		0.0,
		5.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	]);

	sfillNaN( x.length, 0.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ NaN, 2.0 ] );
	expected = new Float32Array( [ 5.0, 2.0 ] );

	sfillNaN( x.length, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, NaN, 3.0, NaN, 5.0 ] );
	out = sfillNaN( x.length, 0.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', opts, function test( t ) {
	var x;

	x = new Float32Array( [ NaN, -4.0, 1.0 ] );

	sfillNaN( 0, 0.0, x, 1 );
	t.ok( isnanf( x[ 0 ] ), 'returns expected value' );
	t.strictEqual( x[ 1 ], -4.0, 'returns expected value' );
	t.strictEqual( x[ 2 ], 1.0, 'returns expected value' );

	x = new Float32Array( [ NaN, -4.0, 1.0 ] );
	sfillNaN( -4, 0.0, x, 1 );
	t.ok( isnanf( x[ 0 ] ), 'returns expected value' );
	t.strictEqual( x[ 1 ], -4.0, 'returns expected value' );
	t.strictEqual( x[ 2 ], 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		NaN,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		NaN   // 2
	]);
	expected = new Float32Array([
		0.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 2
	]);

	sfillNaN( 3, 0.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		NaN,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		NaN   // 0
	]);
	expected = new Float32Array([
		0.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 0
	]);

	sfillNaN( 3, 0.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float32Array([
		1.0,
		NaN,  // 0
		3.0,
		NaN,  // 1
		5.0,
		6.0   // 2
	]);
	expected = new Float32Array([
		1.0,
		0.0,  // 0
		3.0,
		0.0,  // 1
		5.0,
		6.0   // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	sfillNaN( 3, 0.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
