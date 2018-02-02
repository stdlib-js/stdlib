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
* Test whether all elements in a collection fail a test implemented by a predicate function, iterating from right to left.
*
* @module @stdlib/utils/none-by-right
*
* @example
* var noneByRight = require( '@stdlib/utils/none-by-right' );
*
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var arr = [ -1, -2, -3, -4 ];
*
* var bool = noneByRight( arr, isPositive );
* // returns true
*/

// MODULES //

var noneByRight = require( './none_by_right.js' );


// EXPORTS //

module.exports = noneByRight;
