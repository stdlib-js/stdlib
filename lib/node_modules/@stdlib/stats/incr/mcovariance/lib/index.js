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
* Compute a moving unbiased sample covariance incrementally.
*
* @module @stdlib/stats/incr/mcovariance
*
* @example
* var incrmcovariance = require( '@stdlib/stats/incr/mcovariance' );
*
* var accumulator = incrmcovariance( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* v = accumulator( -5.0, 3.14 );
* // returns ~-7.49
*
* v = accumulator( 3.0, -1.0 );
* // returns -8.35
*
* v = accumulator( 5.0, -9.5 );
* // returns -29.42
*
* v = accumulator();
* // returns -29.42
*/

// MODULES //

var incrmcovariance = require( './main.js' );


// EXPORTS //

module.exports = incrmcovariance;
