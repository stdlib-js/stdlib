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
* Compute a moving arithmetic mean and corrected sample standard deviation incrementally.
*
* @module @stdlib/stats/incr/mmeanstdev
*
* @example
* var incrmmeanstdev = require( '@stdlib/stats/incr/mmeanstdev' );
*
* var accumulator = incrmmeanstdev( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* v = accumulator( -5.0 );
* // returns [ -1.5, ~4.95 ]
*
* v = accumulator( 3.0 );
* // returns [ 0.0, ~4.36 ]
*
* v = accumulator( 5.0 );
* // returns [ 1.0, ~5.29 ]
*
* v = accumulator();
* // returns [ 1.0, ~5.29 ]
*/

// MODULES //

var incrmmeanstdev = require( './main.js' );


// EXPORTS //

module.exports = incrmmeanstdev;
