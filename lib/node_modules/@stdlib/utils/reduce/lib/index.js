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
* Apply a function against an accumulator and each element in an array and return the accumulated result.
*
* @module @stdlib/utils/reduce
*
* @example
* var reduce = require( '@stdlib/utils/reduce' );
*
* function sum( acc, value ) {
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = reduce( arr, 0, sum );
* // returns 10
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
* var reduce = require( '@stdlib/utils/reduce' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
*
* var out = reduce( arr, 0, naryFunction( add, 2 ) );
* // returns 21
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
