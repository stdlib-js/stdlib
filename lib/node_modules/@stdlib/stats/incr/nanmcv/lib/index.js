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
* Compute a moving coefficient of variation (CV) incrementally, ignoring `NaN` values.
*
* @module @stdlib/stats/incr/nanmcv
*
* @example
* var incrnanmcv = require( '@stdlib/stats/incr/nanmcv' );
*
* var accumulator = incrnanmcv( 3 );
*
* var cv = accumulator();
* // returns null
*
* cv = accumulator( 2.0 );
* // returns 0.0
*
* cv = accumulator( NaN );
* // returns 0.0
*
* cv = accumulator( 1.0 );
* // returns ~0.47
*
* cv = accumulator( 3.0 );
* // returns 0.5
*
* cv = accumulator( 7.0 );
* // returns ~0.83
*
* cv = accumulator();
* // returns ~0.83
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
