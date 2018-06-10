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
* Compute a moving residual sum of squares (RSS) incrementally.
*
* @module @stdlib/stats/incr/mrss
*
* @example
* var incrmrss = require( '@stdlib/stats/incr/mrss' );
*
* var accumulator = incrmrss( 3 );
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 50.0
*
* r = accumulator( 3.0, 2.0 );
* // returns 51.0
*
* r = accumulator( 5.0, -2.0 );
* // returns 99.0
*
* r = accumulator();
* // returns 99.0
*/

// MODULES //

var incrmrss = require( './main.js' );


// EXPORTS //

module.exports = incrmrss;
