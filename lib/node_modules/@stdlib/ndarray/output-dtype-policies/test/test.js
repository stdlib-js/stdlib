/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var policies = require( './../lib' );


// VARIABLES //

// List of native policies which should be supported...
var POLICIES = [
	'same',
	'promoted',
	'bool',
	'signed_integer',
	'unsigned_integer',
	'integer',
	'floating_point',
	'real_floating_point',
	'complex_floating_point',
	'real',
	'numeric',
	'default'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof policies, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of ndarray data type policies', function test( t ) {
	var expected;
	var actual;

	expected = [
		'same',
		'promoted',
		'bool',
		'signed_integer',
		'unsigned_integer',
		'integer',
		'floating_point',
		'real_floating_point',
		'complex_floating_point',
		'real',
		'numeric',
		'default'
	];
	actual = policies();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `enum` method to return an object mapping policies to enumeration constants for C inter-operation', function test( t ) {
	var obj;
	var i;

	t.strictEqual( hasOwnProp( policies, 'enum' ), true, 'has property' );
	t.strictEqual( typeof policies.enum, 'function', 'has method' );

	obj = policies.enum();
	t.strictEqual( typeof obj, 'object', 'returns expected value type' );

	for ( i = 0; i < POLICIES.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, POLICIES[ i ] ), true, 'has property `' + POLICIES[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ POLICIES[i] ] ), true, 'returns expected value' );
	}

	t.end();
});

tape( 'attached to the main function are policy enumeration constants', function test( t ) {
	var i;
	for ( i = 0; i < POLICIES.length; i++ ) {
		t.strictEqual( isNonNegativeInteger( policies[ POLICIES[i] ] ), true, 'returns expected value' );
	}
	t.end();
});
