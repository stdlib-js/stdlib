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
var Float32Array = require( '@stdlib/array/float32' );


// VARIABLES //

var sany = tryRequire( resolve( __dirname, './../lib/sany.native.js' ) );
var opts = {
	'skip': ( sany instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( sany.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether at least one element is truthy', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	expected = true;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = false;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 0.0, 0.0 ] );
	expected = true;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0, 0.0 ] );
	expected = false;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ NaN, 0.0, 0.0 ] );
	expected = false;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN, NaN ] );
	expected = false;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ NaN, 1.0, 0.0 ] );
	expected = true;
	v = sany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = false;

	v = sany( 0, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	v = sany( -1, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ 0.0, 999.0, 0.0, 999.0, 1.0, 999.0, 1.0 ] );
	expected = true;
	v = sany( 4, x, 2 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 999.0, 0.0, 999.0, 0.0, 999.0, 0.0 ] );
	expected = false;
	v = sany( 4, x, 2 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ 1.0, 999.0, 999.0, 999.0 ] );
	expected = true;
	v = sany( 4, x, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 999.0, 999.0, 999.0 ] );
	expected = false;
	v = sany( 4, x, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float32Array( [ 1.0, 1.0, 0.0, 0.0 ] );
	expected = true;
	v = sany( 4, x, -1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = false;
	v = sany( 4, x, -1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});
