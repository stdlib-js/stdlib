/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Calculate the range of a strided array via a callback function.
*
* @module @stdlib/stats/base/range-by
*
* @example
* var rangeBy = require( '@stdlib/stats/base/range-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* var v = rangeBy( x.length, x, 1, accessor );
* // returns 18.0
*
* @example
* var rangeBy = require( '@stdlib/stats/base/range-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* var v = rangeBy.ndarray( x.length, x, 1, 0, accessor );
* // returns 18.0
*/

// MODULES //

var rangeBy = require( './main.js' );


// EXPORTS //

module.exports = rangeBy;
