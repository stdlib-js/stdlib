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
var Uint8Array = require( '@stdlib/array/uint8' );
var Number = require( '@stdlib/number/ctor' );
var isPrimitiveArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPrimitiveArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only primitives', function test( t ) {
	var arr;

	arr = [ 'abc', 123, null, NaN, undefined ];
	t.equal( isPrimitiveArray( arr ), true, 'returns true' );

	arr = [ 5.0, '5.0', new Number( 2 ) ];
	t.equal( isPrimitiveArray( arr ), false, 'returns false' );

	arr = {
		'length': 3,
		'0': 5.0,
		'1': '5.0',
		'2': false
	};
	t.equal( isPrimitiveArray( arr ), true, 'returns true' );

	arr = new Uint8Array( [ 1, 2, 3, 4, 5 ] );
	t.equal( isPrimitiveArray( arr ), true, 'returns true' );

	arr = [ {}, new String( 'abc' ) ];
	t.equal( isPrimitiveArray( arr ), false, 'returns false' );

	t.end();
});
