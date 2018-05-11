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
* Compute a sample Pearson product-moment correlation distance incrementally.
*
* @module @stdlib/stats/incr/pcorrdist
*
* @example
* var incrpcorrdist = require( '@stdlib/stats/incr/pcorrdist' );
*
* var accumulator = incrpcorrdist();
*
* var d = accumulator();
* // returns null
*
* d = accumulator( 2.0, 1.0 );
* // returns 1.0
*
* d = accumulator( -5.0, 3.14 );
* // returns ~2.0
*
* d = accumulator();
* // returns ~2.0
*/

// MODULES //

var incrpcorrdist = require( './main.js' );


// EXPORTS //

module.exports = incrpcorrdist;
