/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax, no-empty-function, no-unused-vars */

'use strict';

var Complex64Array = require( '@stdlib/array/complex64' );
var isComplexTypedArrayLike = require( './../lib' );

var arr = {
	'BYTES_PER_ELEMENT': 8,
	'length': 10,
	'byteOffset': 0,
	'byteLength': 10,
	'get': function get() {},
	'set': function set() {}
};
console.log( isComplexTypedArrayLike( arr ) );
// => true

console.log( isComplexTypedArrayLike( new Complex64Array( 4 ) ) );
// => true

console.log( isComplexTypedArrayLike( [] ) );
// => false

console.log( isComplexTypedArrayLike( {} ) );
// => false

console.log( isComplexTypedArrayLike( null ) );
// => false

console.log( isComplexTypedArrayLike( 'beep' ) );
// => false

console.log( isComplexTypedArrayLike( function foo( a, b ) {} ) );
// => false
