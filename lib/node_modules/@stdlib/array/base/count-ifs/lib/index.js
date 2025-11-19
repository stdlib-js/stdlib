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

/**
* Perform element-wise evaluation of one or more input arrays according to provided predicate functions and count the number of elements for which all predicates respectively return `true`.
*
* @module @stdlib/array/base/count-ifs
*
* @example
* var countIfs = require( '@stdlib/array/base/count-ifs' );
*
* function predicate0( value ) {
*     return ( value > 0 );
* }
*
* function predicate1( value ) {
*     return ( value < 3 );
* }
*
* var x0 = [ 0, 1, 0, 1, 2 ];
* var x1 = [ 2, 3, 1, 2, 5 ];
*
* var n = countIfs( x0, predicate0, x1, predicate1 );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
