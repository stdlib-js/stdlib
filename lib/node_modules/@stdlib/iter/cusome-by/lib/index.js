/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Create an iterator which cumulatively tests whether at least `n` iterated values pass a test implemented by a predicate function.
*
* @module @stdlib/iter/cusome-by
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterCuSomeBy = require( '@stdlib/iter/cusome-by' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var arr = array2iterator( [ 0, 0, 0, 1, 1 ] );
*
* var it = iterCuSomeBy( arr, 2, isPositive );
*
* var v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns true
*
* var bool = it.next().done;
* // returns true
*/


// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
