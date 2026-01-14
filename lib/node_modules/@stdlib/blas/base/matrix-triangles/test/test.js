/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var matrixTriangles = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof matrixTriangles, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of triangular parts', function test( t ) {
	var expected;
	var actual;

	expected = [
		'upper',
		'lower'
	];
	actual = matrixTriangles();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `enum` method to return an object mapping triangular parts to integer values for C inter-operation', function test( t ) {
	var obj;
	var o;
	var i;

	t.strictEqual( hasOwnProp( matrixTriangles, 'enum' ), true, 'has property' );
	t.strictEqual( typeof matrixTriangles.enum, 'function', 'has method' );

	obj = matrixTriangles.enum();
	t.strictEqual( typeof obj, 'object', 'returns expected value type' );

	// List of values which should be supported...
	o = [
		'upper',
		'lower'
	];
	for ( i = 0; i < o.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, o[ i ] ), true, 'has property `' + o[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ o[i] ] ), true, 'returns expected value' );
	}

	t.end();
});
