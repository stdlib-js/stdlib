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
var isArray = require( '@stdlib/assert/is-array' );
var flattenShape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flattenShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function flattens a provided shape', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 3, 2 ];
	expected = [ 6 ];
	actual = flattenShape( shape, 1 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 10 ];
	actual = flattenShape( shape, 1 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 1, 10 ];
	actual = flattenShape( shape, 0 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 20 ];
	actual = flattenShape( shape, 2 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 20 ];
	actual = flattenShape( shape, 10 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is an `assign` method which supports flattening a provided shape and assigning results to an output array', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 3, 2 ];
	expected = [ 6 ];

	out = [ 0 ];
	actual = flattenShape.assign( shape, 1, out );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 10 ];

	out = [ 0, 0 ];
	actual = flattenShape.assign( shape, 1, out );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 20 ];

	out = [ 0 ];
	actual = flattenShape.assign( shape, 2, out );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 1, 10 ];

	out = [ 0, 0, 0 ];
	actual = flattenShape.assign( shape, 0, out );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 20 ];

	out = [ 0 ];
	actual = flattenShape.assign( shape, 10, out );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
