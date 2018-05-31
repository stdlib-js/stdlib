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
* Compute a moving sample Pearson product-moment correlation distance incrementally.
*
* @module @stdlib/stats/incr/mpcorrdist
*
* @example
* var incrmpcorrdist = require( '@stdlib/stats/incr/mpcorrdist' );
*
* var accumulator = incrmpcorrdist( 3 );
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
* d = accumulator( 3.0, -1.0 );
* // returns ~1.925
*
* d = accumulator( 5.0, -9.5 );
* // returns ~1.863
*
* d = accumulator();
* // returns ~1.863
*/

// MODULES //

var incrmpcorrdist = require( './main.js' );


// EXPORTS //

module.exports = incrmpcorrdist;
