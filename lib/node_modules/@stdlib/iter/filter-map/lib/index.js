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
* Create an iterator which both filters and maps a provided iterator's values.
*
* @module @stdlib/iter/filter-map
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterFilterMap = require( '@stdlib/iter/filter-map' );
*
* function fcn( v ) {
*     if ( v > 2 ) {
*         return v * 10;
*     }
* }
*
* var src = array2iterator( [ 1, 3, 2, 4 ] );
* var iter = iterFilterMap( src, fcn );
*
* var v = iter.next().value;
* // returns 30
*
* v = iter.next().value;
* // returns 40
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterFilterMap = require( './main.js' );


// EXPORTS //

module.exports = iterFilterMap;
