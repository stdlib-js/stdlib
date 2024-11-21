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

tape( 'attached to the prototype of the main export is a `get` method for returning an array element', function test( t ) {
	t.strictEqual( hasOwnProp( AccessorArray.prototype, 'get' ), true, 'has property' );
	t.strictEqual( isFunction( AccessorArray.prototype.get ), true, 'has method' );
	t.end();
});

tape( 'the method returns an array element', function test( t ) {
	var arr;
	var i;

	arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	arr = new AccessorArray( arr );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( arr.get( i ), i+1, 'returns expected value for index '+i );
	}
	t.end();
});
