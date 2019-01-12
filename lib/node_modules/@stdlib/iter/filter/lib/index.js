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
* Create an iterator which filters a provided iterator's values according to a predicate function.
*
* @module @stdlib/iter/filter
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterFilter = require( '@stdlib/iter/filter' );
*
* function predicate( v ) {
*     return ( v > 2 );
* }
*
* var src = array2iterator( [ 1, 3, 2, 4 ] );
* var iter = iterFilter( src, predicate );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterFilter = require( './main.js' );


// EXPORTS //

module.exports = iterFilter;
