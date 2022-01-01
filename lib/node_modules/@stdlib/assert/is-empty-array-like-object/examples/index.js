/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable object-curly-newline, no-empty-function, no-restricted-syntax */

'use strict';

var Float64Array = require( '@stdlib/array/float64' );
var isEmptyArrayLikeObject = require( './../lib' );

console.log( isEmptyArrayLikeObject( { 'length': 0 } ) );
// => true

console.log( isEmptyArrayLikeObject( [] ) );
// => true

console.log( isEmptyArrayLikeObject( new Float64Array( 0 ) ) );
// => true

console.log( isEmptyArrayLikeObject( 'beep' ) );
// => false

console.log( isEmptyArrayLikeObject( null ) );
// => false

console.log( isEmptyArrayLikeObject( void 0 ) );
// => false

console.log( isEmptyArrayLikeObject( 5 ) );
// => false

console.log( isEmptyArrayLikeObject( true ) );
// => false

console.log( isEmptyArrayLikeObject( {} ) );
// => false

console.log( isEmptyArrayLikeObject( function noop() {} ) );
// => false
