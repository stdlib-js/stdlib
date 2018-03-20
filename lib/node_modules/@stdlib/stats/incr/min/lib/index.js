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
* Compute a minimum value incrementally.
*
* @module @stdlib/stats/incr/min
*
* @example
* var incrmin = require( '@stdlib/stats/incr/min' );
*
* var accumulator = incrmin();
*
* var min = accumulator();
* // returns null
*
* min = accumulator( 3.14 );
* // returns 3.14
*
* min = accumulator( -5.0 );
* // returns -5.0
*
* min = accumulator( 10.1 );
* // returns -5.0
*
* min = accumulator();
* // returns -5.0
*/

// MODULES //

var incrmin = require( './main.js' );


// EXPORTS //

module.exports = incrmin;
