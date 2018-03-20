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
* Compute a moving unbiased sample variance incrementally.
*
* @module @stdlib/stats/incr/mvariance
*
* @example
* var incrmvariance = require( '@stdlib/stats/incr/mvariance' );
*
* var accumulator = incrmvariance( 3 );
*
* var s2 = accumulator();
* // returns null
*
* s2 = accumulator( 2.0 );
* // returns 0.0
*
* s2 = accumulator( -5.0 );
* // returns 24.5
*
* s2 = accumulator( 3.0 );
* // returns 19.0
*
* s2 = accumulator( 5.0 );
* // returns 28.0
*
* s2 = accumulator();
* // returns 28.0
*/

// MODULES //

var incrmvariance = require( './main.js' );


// EXPORTS //

module.exports = incrmvariance;
