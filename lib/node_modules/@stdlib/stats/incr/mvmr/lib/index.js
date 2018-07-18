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
* Compute a moving variance-to-mean ratio (VMR) incrementally.
*
* @module @stdlib/stats/incr/mvmr
*
* @example
* var incrmvmr = require( '@stdlib/stats/incr/mvmr' );
*
* var accumulator = incrmvmr( 3 );
*
* var F = accumulator();
* // returns null
*
* F = accumulator( 2.0 );
* // returns 0.0
*
* F = accumulator( 1.0 );
* // returns ~0.33
*
* F = accumulator( 3.0 );
* // returns 0.5
*
* F = accumulator( 7.0 );
* // returns ~2.55
*
* F = accumulator();
* // returns ~2.55
*/

// MODULES //

var incrmvmr = require( './main.js' );


// EXPORTS //

module.exports = incrmvmr;
