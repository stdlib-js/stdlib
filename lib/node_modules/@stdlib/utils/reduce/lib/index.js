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
* Apply a function against an accumulator and each element in a collection and return the accumulated result.
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
* var s = reduce( arr, 0, sum );
* // returns 10
*/

// MODULES //

var reduce = require( './reduce.js' );


// EXPORTS //

module.exports = reduce;
