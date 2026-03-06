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

/* eslint-disable object-curly-newline, object-curly-spacing, no-empty-function, no-restricted-syntax */

'use strict';

var isArrayLike = require( './../lib' );

console.log( isArrayLike( {'length': 10} ) );
// => true

console.log( isArrayLike( [] ) );
// => true

console.log( isArrayLike( 'beep' ) );
// => true

console.log( (function test() {
	return isArrayLike( arguments );
})() );
// => true

console.log( isArrayLike( null ) );
// => false

console.log( isArrayLike( void 0 ) );
// => false

console.log( isArrayLike( 5 ) );
// => false

console.log( isArrayLike( true ) );
// => false

console.log( isArrayLike( {} ) );
// => false

console.log( isArrayLike( function noop() {} ) );
// => false
