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

'use strict';

/**
* Reduce the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and return the accumulation results as a one-dimensional array.
*
* @module @stdlib/utils/reduce2d
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var reduce2d = require( '@stdlib/utils/reduce2d' );
*
* var arr = [
*     [ 1, 2, 3 ],
*     [ 4, 5, 6 ]
* ];
*
* var out = reduce2d( arr, [ 0, 0 ], naryFunction( add, 2 ) );
* // returns [ 6, 15 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
