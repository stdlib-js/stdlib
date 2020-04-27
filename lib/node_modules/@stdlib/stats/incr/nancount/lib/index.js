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
* Compute a count incrementally, ignoring `NaN` values.
*
* @module @stdlib/stats/incr/nancount
*
* @example
* var incrnancount = require( '@stdlib/stats/incr/nancount' );
*
* var accumulator = incrnancount();
*
* var nancount = accumulator();
* // returns 0
*
* nancount = accumulator( 2.0 );
* // returns 1
*
* nancount = accumulator( -5.0 );
* // returns 2
*
* nancount = accumulator();
* // returns 2
*/

// MODULES //

var incrnancount = require( './main.js' );


// EXPORTS //

module.exports = incrnancount;
