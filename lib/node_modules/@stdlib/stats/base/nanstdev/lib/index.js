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
* Compute the standard deviation of a strided array ignoring `NaN` values.
*
* @module @stdlib/stats/base/nanstdev
*
* @example
* var nanstdev = require( '@stdlib/stats/base/nanstdev' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanstdev( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var nanstdev = require( '@stdlib/stats/base/nanstdev' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var N = floor( x.length / 2 );
*
* var v = nanstdev.ndarray( N, 1, x, 2, 1 );
* // returns 2.5
*/

// MODULES //

var nanstdev = require( './main.js' );


// EXPORTS //

module.exports = nanstdev;
