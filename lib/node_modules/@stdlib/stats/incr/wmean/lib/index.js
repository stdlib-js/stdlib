/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Compute a weighted arithmetic mean incrementally.
*
* @module @stdlib/stats/incr/wmean
*
* @example
* var incrwmean = require( '@stdlib/stats/incr/wmean' );
*
* var accumulator = incrwmean();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0, 1.0 );
* // returns 2.0
*
* mu = accumulator( 2.0, 0.5 );
* // returns 2.0
*
* mu = accumulator( 3.0, 1.5 );
* // returns 2.5
*
* mu = accumulator();
* // returns 2.5
*/

// MODULES //

var incrwmean = require( './main.js' );


// EXPORTS //

module.exports = incrwmean;
