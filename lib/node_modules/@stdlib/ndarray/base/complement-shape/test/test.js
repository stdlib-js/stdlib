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
var complementShape = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof complementShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a complement shape', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 3, 2 ];
	expected = [ 3 ];
	actual = complementShape( shape, [ 1 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 10 ];
	actual = complementShape( shape, [ 1 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 2, 1, 10 ];
	actual = complementShape( shape, [] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 10 ];
	actual = complementShape( shape, [ -3, -2 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 1 ];
	actual = complementShape( shape, [ 0, -1 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array when provided out-of-bounds indices', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 3, 2 ];
	expected = [];
	actual = complementShape( shape, [ 10 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 3, 2 ];
	expected = [];
	actual = complementShape( shape, [ -10 ] );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
