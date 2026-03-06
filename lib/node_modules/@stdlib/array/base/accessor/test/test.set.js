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
var isFunction = require( '@stdlib/assert/is-function' );
var AccessorArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof AccessorArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `set` method for setting one or more array elements', function test( t ) {
	t.strictEqual( hasOwnProp( AccessorArray.prototype, 'set' ), true, 'has property' );
	t.strictEqual( isFunction( AccessorArray.prototype.set ), true, 'has method' );
	t.end();
});

tape( 'the method sets an array element (complex number)', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new AccessorArray( [ 1, 2, 3, 4, 5 ] );
	t.strictEqual( arr.get( 0 ), 1, 'returns expected value' );

	// No index argument:
	arr.set( 6 );
	t.strictEqual( arr.get( 0 ), 6, 'returns expected value' );

	// Reset the value:
	arr.set( 1 );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( v, i+1, 'returns expected value' );

		arr.set( i+10, i );

		v = arr.get( i );
		t.strictEqual( v, i+10, 'returns expected value' );
	}
	t.end();
});
