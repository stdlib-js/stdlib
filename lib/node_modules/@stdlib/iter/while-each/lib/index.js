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

/**
* Create an iterator which, while a test condition is true, invokes a function for each iterated value before returning the iterated value.
*
* @module @stdlib/iter/while-each
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterWhileEach = require( '@stdlib/iter/while-each' );
*
* function predicate( v ) {
*     return v < 3;
* }
*
* function assert( v ) {
*     if ( v !== v ) {
*         throw new Error( 'should not be NaN' );
*     }
* }
*
* var it = iterWhileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
* // returns {}
*
* var r = it.next().value;
* // returns 1
*
* r = it.next().value;
* // returns 2
*
* r = it.next().value;
* // undefined
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
