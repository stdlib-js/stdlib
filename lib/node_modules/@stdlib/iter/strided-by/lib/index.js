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
* Create an iterator which steps according to a provided callback function.
*
* @module @stdlib/iter/strided-by
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterStridedBy = require( '@stdlib/iter/strided-by' );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* function stride( v, i ) {
*     return (i % 10)+1;
* }
*
* var iter = iterStridedBy( arr, stride );
*
* var r = iter.next().value;
* // returns 0
*
* r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 3
*
* // ...
*/

// MODULES //

var iterStridedBy = require( './main.js' );


// EXPORTS //

module.exports = iterStridedBy;
