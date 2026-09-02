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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var dapx = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dapx, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 4', function test( t ) {
	t.strictEqual( dapx.main.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the `main` method adds a constant to each element of a strided array', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	dapx.main( x.length, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = dapx.main( x.length, 3.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns the output array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	dapx.main( -1, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dapx.main( 0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 2.0, -3.0, -5.0, 7.0, 6.0 ] );
	expected = new Float64Array( [ 7.0, -3.0, 0.0, 7.0, 11.0 ] );

	dapx.main( 3, 5.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 2.0, -3.0, -5.0, 7.0, 6.0 ] );
	expected = new Float64Array( [ 7.0, -3.0, 0.0, 7.0, 11.0 ] );

	dapx.main( 3, 5.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
