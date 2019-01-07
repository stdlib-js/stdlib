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
* Create an iterator which returns unique values according to a predicate function.
*
* @module @stdlib/iter/unique-by
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterUniqueBy = require( '@stdlib/iter/unique-by' );
*
* function predicate( a, b ) {
*     return ( a !== b );
* }
*
* var iter = iterUniqueBy( array2iterator( [ 1, 2, 1, 2, 4 ] ), predicate );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterUniqueBy = require( './main.js' );


// EXPORTS //

module.exports = iterUniqueBy;
