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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var dtypeEnums = require( './../lib' );


// VARIABLES //

// List of native C types which should be supported...
var DTYPES = [
	'int8',
	'uint8',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'int64',
	'uint64',

	'float16',
	'float32',
	'float64',

	'complex32',
	'complex64',
	'complex128',

	'bool'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypeEnums, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object mapping dtypes to enumeration constants', function test( t ) {
	var obj;
	var i;

	obj = dtypeEnums();
	t.strictEqual( typeof obj, 'object', 'returns expected value' );

	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( hasOwnProp( obj, DTYPES[ i ] ), true, 'has property `' + DTYPES[ i ] + '`' );
		t.strictEqual( isNonNegativeInteger( obj[ DTYPES[i] ] ), true, 'returns expected value' );
	}
	t.end();
});
