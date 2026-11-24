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

var tape = require( 'tape' );
var assign = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is out-of-bounds', function test( t ) {
	var values;
	var shape;
	var sizes;
	var out;
	var i;

	shape = [ 4, 2 ];
	sizes = [ 2, 2 ];
	out = [ 0, 0, 0 ];

	values = [
		-3,
		-4,
		2,
		3,
		4
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( shape, value, sizes, out );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is incompatible with the size of a specified dimension', function test( t ) {
	var values;
	var shape;
	var sizes;
	var out;
	var i;

	shape = [ 4, 2 ];
	sizes = [ 2, 2 ];
	out = [ 0, 0, 0 ];

	values = [
		0,
		1,
		2,
		3,
		5,
		6
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sizes[ 0 ] = value;
			assign( shape, 0, value, out );
		};
	}
});

tape( 'the function expands a dimension over multiple dimensions and assigns results to an output array', function test( t ) {
	var expected;
	var actual;
	var shape;
	var sizes;
	var out;

	shape = [ 4, 2 ];
	sizes = [ 2, 2 ];
	expected = [ 2, 2, 2 ];
	out = [ 0, 0, 0 ];
	actual = assign( shape, 0, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 4, 2 ];
	sizes = [ 2, 2 ];
	expected = [ 2, 2, 2 ];
	out = [ 0, 0, 0 ];
	actual = assign( shape, -2, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	sizes = [ 2, 5 ];
	expected = [ 2, 1, 2, 5 ];
	out = [ 0, 0, 0, 0 ];
	actual = assign( shape, 2, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	sizes = [ 2, 5 ];
	expected = [ 2, 1, 2, 5 ];
	out = [ 0, 0, 0, 0 ];
	actual = assign( shape, -1, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 4, 3, 2 ];
	sizes = [ 1, 3 ];
	expected = [ 1, 4, 1, 3, 2 ];
	out = [ 0, 0, 0, 0, 0 ];
	actual = assign( shape, 2, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 1, 4, 3, 2 ];
	sizes = [ 1, 3 ];
	expected = [ 1, 4, 1, 3, 2 ];
	out = [ 0, 0, 0, 0, 0 ];
	actual = assign( shape, -2, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 12 ];
	sizes = [ 2, 2, 3 ];
	expected = [ 2, 2, 3 ];
	out = [ 0, 0, 0 ];
	actual = assign( shape, 0, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 12 ];
	sizes = [ 2, 2, 3 ];
	expected = [ 2, 2, 3 ];
	out = [ 0, 0, 0 ];
	actual = assign( shape, -1, sizes, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
