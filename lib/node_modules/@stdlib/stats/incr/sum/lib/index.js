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
* Compute a sum incrementally.
*
* @module @stdlib/stats/incr/sum
*
* @example
* var incrsum = require( '@stdlib/stats/incr/sum' );
*
* var accumulator = incrsum();
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 2.0
*
* sum = accumulator( -5.0 );
* // returns -3.0
*
* sum = accumulator();
* // returns -3.0
*/

// MODULES //

var incrsum = require( './main.js' );


// EXPORTS //

module.exports = incrsum;
