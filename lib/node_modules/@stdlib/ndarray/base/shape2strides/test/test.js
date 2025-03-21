/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var shape2strides = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof shape2strides, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function generates a stride array from an array shape (row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 3, 2 ];
	expected = [ 2, 1 ];
	actual = shape2strides( shape, 'row-major' );

	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 10, 10, 1 ];
	actual = shape2strides( shape, 'row-major' );

	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function generates a stride array from an array shape (column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;

	shape = [ 3, 2 ];
	expected = [ 1, 3 ];
	actual = shape2strides( shape, 'column-major' );

	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 1, 2, 2 ];
	actual = shape2strides( shape, 'column-major' );

	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is a method which supports generating a stride array from an array shape in-place (row-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 3, 2 ];
	expected = [ 2, 1 ];

	out = new Array( shape.length );
	actual = shape2strides.assign( shape, 'row-major', out );

	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 10, 10, 1 ];

	out = new Array( shape.length );
	actual = shape2strides.assign( shape, 'row-major', out );

	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is a method which supports generating a stride array from an array shape in-place (column-major)', function test( t ) {
	var expected;
	var actual;
	var shape;
	var out;

	shape = [ 3, 2 ];
	expected = [ 1, 3 ];

	out = new Array( shape.length );
	actual = shape2strides.assign( shape, 'column-major', out );

	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	shape = [ 2, 1, 10 ];
	expected = [ 1, 2, 2 ];

	out = new Array( shape.length );
	actual = shape2strides.assign( shape, 'column-major', out );

	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual.length, shape.length, 'returns expected length' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
