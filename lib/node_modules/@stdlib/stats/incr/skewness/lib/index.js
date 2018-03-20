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
* Compute a corrected sample skewness incrementally.
*
* @module @stdlib/stats/incr/skewness
*
* @example
* var incrskewness = require( '@stdlib/stats/incr/skewness' );
*
* var accumulator = incrskewness();
*
* var skewness = accumulator();
* // returns null
*
* skewness = accumulator( 2.0 );
* // returns null
*
* skewness = accumulator( -5.0 );
* // returns null
*
* skewness = accumulator( -10.0 );
* // returns ~0.492
*
* skewness = accumulator();
* // returns ~0.492
*/

// MODULES //

var incrskewness = require( './main.js' );


// EXPORTS //

module.exports = incrskewness;
