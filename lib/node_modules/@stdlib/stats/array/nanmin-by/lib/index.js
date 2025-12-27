/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Compute the minimum value of an array via a callback function, ignoring `NaN` values.
*
* @module @stdlib/stats/array/nanmin-by
*
* @example
* var nanminBy = require( '@stdlib/stats/array/nanmin-by' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
*
* var v = nanminBy( x, accessor );
* // returns -10.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
