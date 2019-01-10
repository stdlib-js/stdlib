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
* Create an iterator which returns the intersection of two or more iterators according to a hash function.
*
* @module @stdlib/iter/intersection-by-hash
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterIntersectionByHash = require( '@stdlib/iter/intersection-by-hash' );
*
* function hashFcn( v ) {
*     return v.toString();
* }
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
*
* var iter = iterIntersectionByHash( it1, it2, hashFcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterIntersectionByHash = require( './main.js' );


// EXPORTS //

module.exports = iterIntersectionByHash;
