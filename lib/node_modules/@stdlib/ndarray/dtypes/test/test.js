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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var dtypes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a list of ndarray data types', function test( t ) {
	var expected;
	var actual;

	expected = [
		'binary',
		'complex64',
		'complex128',
		'float32',
		'float64',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	actual = dtypes();

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'attached to the main function is an `enum` method to return an object mapping dtypes to integer values for C inter-operation', function test( t ) {
	var obj;
	var dt;
	var i;

	t.strictEqual( hasOwnProp( dtypes, 'enum' ), true, 'has property' );
	t.strictEqual( typeof dtypes.enum, 'function', 'has method' );

	obj = dtypes.enum();
	t.strictEqual( typeof obj, 'object', 'returns expected value type' );

	// List of native C types which should be supported...
	dt = [
		'int8',
		'uint8',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'int64',
		'uint64',
		'float32',
		'float64',
		'complex64',
		'complex128'
	];
	for ( i = 0; i < dt.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, dt[ i ] ), true, 'has property `' + dt[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ dt[i] ] ), true, 'returns expected value' );
	}

	t.end();
});

tape( 'attached to the main function is an `enumerate` method to the integer value associated with a provided dtype for C inter-operation', function test( t ) {
	var obj;
	var dt;
	var i;

	t.strictEqual( hasOwnProp( dtypes, 'enumerate' ), true, 'has property' );
	t.strictEqual( typeof dtypes.enumerate, 'function', 'has method' );

	// List of native C types which should be supported...
	dt = [
		'int8',
		'uint8',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'int64',
		'uint64',
		'float32',
		'float64',
		'complex64',
		'complex128'
	];
	for ( i = 0; i < dt.length; i++ ) {
		t.strictEqual( isNonNegativeInteger( dtypes.enumerate( dt[i] ) ), true, 'returns expected value' );
	}
	t.end();
});

