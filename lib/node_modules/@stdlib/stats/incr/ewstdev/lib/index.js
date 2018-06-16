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
* Compute an exponentially weighted standard deviation incrementally.
*
* @module @stdlib/stats/incr/ewstdev
*
* @example
* var increwstdev = require( '@stdlib/stats/incr/ewstdev' );
*
* var accumulator = increwstdev();
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns 3.5
*
* s = accumulator();
* // returns 3.5
*/

// MODULES //

var increwstdev = require( './main.js' );


// EXPORTS //

module.exports = increwstdev;
