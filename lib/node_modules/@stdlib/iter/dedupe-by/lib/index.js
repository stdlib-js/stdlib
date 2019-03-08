/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Create an iterator which removes consecutive values that resolve to the same value according to a provided function.
*
* @module @stdlib/iter/dedupe-by
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterDedupeBy = require( '@stdlib/iter/dedupe-by' );
*
* function fcn( v ) {
*     return v;
* }
*
* var iter = iterDedupeBy( array2iterator( [ 1, 1, 2, 3, 3 ] ), fcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterDedupeBy = require( './main.js' );


// EXPORTS //

module.exports = iterDedupeBy;
