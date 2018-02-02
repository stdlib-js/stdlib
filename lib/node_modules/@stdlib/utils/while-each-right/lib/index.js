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

/**
* While a test condition is true, invoke a function once for each element in a collection, iterating from right to left.
*
* @module @stdlib/utils/while-each-right
*
* @example
* var whileEachRight = require( '@stdlib/utils/while-each-right' );
*
* function predicate( v, index, collection ) {
*     return ( v === v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, NaN, 2, 3, 4, 5 ];
*
* whileEachRight( arr, predicate, log );
*/

// MODULES //

var whileEachRight = require( './while_each_right.js' );


// EXPORTS //

module.exports = whileEachRight;
